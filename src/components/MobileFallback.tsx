"use client";

import { useEffect } from "react";

/**
 * MobileFallback component
 * On mobile devices, ensures all animated elements become visible
 * even if Framer Motion's IntersectionObserver-based whileInView
 * fails to trigger (common on mobile browsers).
 *
 * Strategy: After a 3-second delay on mobile, force all elements
 * with opacity: 0 (Framer Motion initial state) to become visible.
 */
export default function MobileFallback() {
  useEffect(() => {
    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      window.innerWidth < 900;

    if (!isMobile) return;

    const timer = setTimeout(() => {
      // Only target elements inside main sections — skip nav/modals
      const allElements = document.querySelectorAll<HTMLElement>(
        "main section *"
      );

      allElements.forEach((el) => {
        const style = window.getComputedStyle(el);
        const opacity = parseFloat(style.opacity);
        // Skip fixed/absolute positioned overlays (nav, modals)
        if (style.position === "fixed" || style.position === "absolute") return;
        if (opacity < 0.1 && el.offsetHeight > 0) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
