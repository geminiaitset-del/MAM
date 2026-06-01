import cv2
import numpy as np

# Load original logo
img = cv2.imread('LOGO IMG.png', cv2.IMREAD_GRAYSCALE)

# Threshold to binary (black monogram on white background)
# The logo is black, so threshold it so that the logo is white (255) and background is black (0)
_, thresh = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY_INV)

# Find contours with hierarchy (to detect outer shapes and inner holes)
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)

if hierarchy is None:
    print("No contours found.")
    exit(1)

# List to hold SVG paths
svg_paths = []

# Map hierarchy: elements are [Next, Previous, Child, Parent]
hierarchy = hierarchy[0]

# Keep track of processed contours
processed = set()

# Bounding box of all contours to normalize coordinates
x_coords = []
y_coords = []
for c in contours:
    for pt in c:
        x_coords.append(pt[0][0])
        y_coords.append(pt[0][1])

min_x, max_x = min(x_coords), max(x_coords)
min_y, max_y = min(y_coords), max(y_coords)
width = max_x - min_x
height = max_y - min_y

print(f"Bounding box: ({min_x}, {min_y}) to ({max_x}, {max_y}), size {width}x{height}")

# Target scale: we can map the coordinates to a standard 1000x1000 grid for double-precision accuracy
target_scale = 1000.0

def scale_pt(pt):
    x = (pt[0] - min_x) / width * target_scale
    y = (pt[1] - min_y) / height * target_scale
    return round(x, 2), round(y, 2)

# Find outer contours (those with no parent)
outer_indices = [i for i, h in enumerate(hierarchy) if h[3] == -1]

# We want to sort the outer contours from left to right based on their leftmost point
def get_leftmost_x(idx):
    return np.min(contours[idx][:, :, 0])

outer_indices.sort(key=get_leftmost_x)

for outer_idx in outer_indices:
    # Simplify outer contour
    c_outer = contours[outer_idx]
    # Epsilon for polygon approximation
    peri = cv2.arcLength(c_outer, True)
    approx_outer = cv2.approxPolyDP(c_outer, 0.0015 * peri, True)
    
    # Generate SVG path string
    pts = [scale_pt(pt[0]) for pt in approx_outer]
    path_d = f"M {pts[0][0]},{pts[0][1]} " + " ".join([f"L {p[0]},{p[1]}" for p in pts[1:]]) + " Z"
    
    # Find children of this outer contour (holes)
    child_idx = hierarchy[outer_idx][2]
    while child_idx != -1:
        c_child = contours[child_idx]
        peri_child = cv2.arcLength(c_child, True)
        approx_child = cv2.approxPolyDP(c_child, 0.0015 * peri_child, True)
        
        # Winding order: inner holes should be drawn in reverse order
        pts_child = [scale_pt(pt[0]) for pt in approx_child]
        # Reverse to ensure correct winding rules
        pts_child.reverse()
        
        path_d += f" M {pts_child[0][0]},{pts_child[0][1]} " + " ".join([f"L {p[0]},{p[1]}" for p in pts_child[1:]]) + " Z"
        
        # Move to next child
        child_idx = hierarchy[child_idx][0]
        
    svg_paths.append(path_d)

print(f"\nSuccessfully traced {len(svg_paths)} shapes.")
for i, d in enumerate(svg_paths):
    print(f"\nShape {i+1}:")
    print(d)
