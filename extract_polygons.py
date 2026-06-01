import cv2
import numpy as np

img = cv2.imread('LOGO IMG.png', cv2.IMREAD_GRAYSCALE)
_, thresh = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY_INV)

# Find all contours with RETR_CCOMP (two-level hierarchy)
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
hierarchy = hierarchy[0]

# Filter outer contours by area to ignore the image border and background
# The image size is 1254x1254 = 1572516 pixels.
# The background area is very large, around 1.2M pixels.
# The actual logo components have areas between 9000 and 150000 pixels.

valid_shapes = []

for i, contour in enumerate(contours):
    # Check if it is an outer contour (parent is either -1 or the background component)
    parent_idx = hierarchy[i][3]
    
    # Let's calculate the area
    area = cv2.contourArea(contour)
    
    # If the contour has a parent, check if the parent itself is very large (the background)
    # Actually, we can just filter by area: area should be between 5000 and 300000 pixels!
    if 5000 <= area <= 300000:
        # Simplify the contour
        peri = cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, 0.001 * peri, True)
        
        # Check if it is an outer shape or a hole
        is_hole = parent_idx != -1 and cv2.contourArea(contours[parent_idx]) < 1000000
        
        valid_shapes.append({
            'index': i,
            'is_hole': is_hole,
            'parent': parent_idx,
            'area': area,
            'polygon': approx
        })

print(f"Found {len(valid_shapes)} valid logo shapes/holes.")

# Print their bounding boxes and simplified points
for idx, shape in enumerate(valid_shapes):
    pts = shape['polygon'][:, 0, :]
    x_min, y_min = pts.min(axis=0)
    x_max, y_max = pts.max(axis=0)
    print(f"\nShape {idx+1} (Index {shape['index']}, Hole={shape['is_hole']}, Area={shape['area']}):")
    print(f"  Bounding Box: ({x_min}, {y_min}) to ({x_max}, {y_max})")
    print(f"  Points ({len(pts)}):")
    for pt in pts:
        print(f"    ({pt[0]}, {pt[1]})")
