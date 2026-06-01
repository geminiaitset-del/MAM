import cv2
import numpy as np

img = cv2.imread('LOGO IMG.png', cv2.IMREAD_GRAYSCALE)
print(f"Original image stats: min={img.min()}, max={img.max()}, mean={img.mean()}")

# Let's save a thresholded binary image to verify it
_, thresh = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY_INV)
print(f"Thresholded image stats: unique values = {np.unique(thresh)}")

num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(thresh)
print(f"Number of connected components: {num_labels}")
for i in range(num_labels):
    print(f"Component {i}: x={stats[i, cv2.CC_STAT_LEFT]}, y={stats[i, cv2.CC_STAT_TOP]}, w={stats[i, cv2.CC_STAT_WIDTH]}, h={stats[i, cv2.CC_STAT_HEIGHT]}, area={stats[i, cv2.CC_STAT_AREA]}")
