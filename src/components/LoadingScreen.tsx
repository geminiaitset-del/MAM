"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MAMLogo from "./MAMLogo";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Safety fallback timeout to prevent stuck loading screen on slow mobile devices
    const safetyTimeout = setTimeout(() => {
      setShow(false);
    }, 1500);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 400); // minimal exit lag
          return 100;
        }
        const step = Math.floor(Math.random() * 18) + 8;
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Safe client-only rendering to prevent a stuck pre-rendered black overlay if hydration crashes!
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-[#080808] z-[9999] flex flex-col items-center justify-center gap-8 overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        >
          {/* Extremely faint premium background radial texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)] pointer-events-none" />

          {/* Centered Logo with slow luxury breathing fade */}
          <motion.div
            className="relative"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MAMLogo size={68} interactive={false} className="relative z-10" />
          </motion.div>

          {/* Ultra-minimalist hairline progress bar */}
          <div className="flex flex-col items-center gap-2.5 w-48 relative z-10">
            <div className="w-full h-[1px] bg-white/5 overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
