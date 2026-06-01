"use client";

import React, { useState, useEffect } from "react";
import MAMLogo from "./MAMLogo";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "AI Lab", href: "#ai-lab" },
    { name: "Work", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants: Variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        staggerChildren: 0.06,
        delayChildren: 0.12,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center transition-all duration-300 h-[60px] md:h-auto py-0 md:py-4 ${
          scrolled || isOpen
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/[0.04]"
            : "bg-transparent md:bg-transparent bg-[#080808]/95 backdrop-blur-md md:backdrop-blur-none border-b border-white/[0.04] md:border-b-0"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <MAMLogo size={42} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 bg-white/[0.03] border border-white/[0.05] px-6 py-2.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-wider text-[#A1A8B8] transition-colors duration-300 hover:text-white uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact CTA Button (Desktop only) */}
          <div className="hidden lg:block">
            <GlowingShadow>
              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-1.5 bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-white/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span className="relative z-10">Start Project</span>
                <ArrowUpRight size={14} className="relative z-10" />
              </motion.a>
            </GlowingShadow>
          </div>
        </div>
      </motion.nav>

      {/* Detached Floating Hamburger Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-hamburger-btn text-white transition-colors cursor-pointer fixed top-3 right-4 z-[2000] w-11 h-11"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center justify-center w-full h-full"
        >
          {isOpen ? <X size={20} className="text-[#00ff88]" /> : <Menu size={20} />}
        </motion.div>
      </button>

      {/* Mobile Drawer (Premium Slide-Down Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[1100] bg-[#080808]/98 backdrop-blur-2xl border-b border-white/[0.08] px-6 pt-24 pb-8 rounded-b-[28px] shadow-[0_24px_64px_rgba(0,0,0,0.85)] mobile-drawer flex flex-col gap-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Ambient Background Grid Detail */}
            <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none rounded-b-[28px]" />
            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00ff88]/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-[9px] font-mono text-white/30 tracking-[0.25em] uppercase mb-2 block">// NAVIGATION SYSTEMS</span>
              {navLinks.map((link, idx) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-display font-black uppercase text-[#A1A8B8] hover:text-white transition-all tracking-wider py-2 flex items-center justify-between border-b border-white/[0.03] group"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all duration-300">
                      // 0{idx + 1}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom Telemetry & CTA */}
            <motion.div
              className="mt-auto pt-6 border-t border-white/[0.05] flex flex-col gap-5 relative z-10"
              variants={linkVariants}
            >
              <div className="flex justify-between items-center text-[8px] font-mono text-white/35 tracking-widest uppercase">
                <span>SYSTEM STATUS // OK</span>
                <span>MAM COMPANY © 2026</span>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-white text-black py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
              >
                Start Project <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
