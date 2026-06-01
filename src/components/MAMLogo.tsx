"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface MAMLogoProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function MAMLogo({ className = "", size = 48, interactive = true }: MAMLogoProps) {
  
  // Clean neutral glow variants
  const containerVariants: Variants = {
    initial: { 
      filter: "drop-shadow(0 0 0px rgba(255, 255, 255, 0))" 
    },
    animate: {
      filter: [
        "drop-shadow(0 0 1px rgba(255, 255, 255, 0.08))",
        "drop-shadow(0 0 8px rgba(255, 255, 255, 0.22))",
        "drop-shadow(0 0 1px rgba(255, 255, 255, 0.08))"
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.03,
      filter: "drop-shadow(0 0 12px rgba(0, 255, 136, 0.45))",
      transition: { duration: 0.3 }
    }
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center overflow-hidden ${className} ${interactive ? "cursor-pointer" : ""}`}
      variants={interactive ? containerVariants : undefined}
      initial="initial"
      animate="animate"
      whileHover={interactive ? "hover" : undefined}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="183 238 886 782"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Left Symmetric Monogram Half (M) */}
        <motion.path
          d="M 183,238 L 184,1019 L 277,939 L 277,436 L 279,435 L 496,622 L 535,539 Z"
          fill="#FFFFFF"
          stroke="rgba(255, 255, 255, 0.85)"
          strokeWidth="6"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Central Symmetrical A - Outer Body */}
        <motion.path
          d="M 889,586 L 794,669 L 794,759 L 629,396 L 461,760 L 459,668 L 365,586 L 363,1019 L 435,1018 L 628,588 L 819,1018 L 888,1020 Z"
          fill="#FFFFFF"
          stroke="rgba(255, 255, 255, 0.85)"
          strokeWidth="6"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Central Symmetrical A - Floating Crossbar */}
        <motion.path
          d="M 551,819 L 703,820 L 669,740 L 587,740 Z"
          fill="#FFFFFF"
          stroke="rgba(255, 255, 255, 0.85)"
          strokeWidth="6"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Right Symmetric Monogram Half (M) */}
        <motion.path
          d="M 1069,238 L 721,539 L 759,622 L 976,436 L 975,940 L 1068,1019 Z"
          fill="#FFFFFF"
          stroke="rgba(255, 255, 255, 0.85)"
          strokeWidth="6"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
}
