"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Layers, Cpu, Award, Globe } from "lucide-react";
import { SplineScene } from "./ui/splite";
import { LogoCloud, heroLogos } from "@/components/ui/logo-cloud-3";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#080808]"
    >
      {/* Dynamic styles injection for custom animations */}
      <style>{`
        @keyframes coreLogoPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 4px rgba(0, 255, 136, 0.45));
            opacity: 0.85;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
            filter: drop-shadow(0 0 15px rgba(0, 255, 136, 0.95));
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 4px rgba(0, 255, 136, 0.45));
            opacity: 0.85;
          }
        }
      `}</style>

      {/* Background System: Subtle engineering grids, radial glows */}
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.015),transparent_60%)] pointer-none" />

      {/* Main Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Editorial Content */}
        <motion.div
          className="w-full lg:w-[48%] flex flex-col gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline: Massive Engineering Statement */}
          <motion.h1
            className="font-display font-black tracking-tighter text-white uppercase"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
            variants={fadeUpVariants}
          >
            <span style={{ display: "block", whiteSpace: "nowrap" }}>Engineering</span>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>The Future Of</span>
            <span className="text-gradient bg-gradient-to-r from-white via-[#A1A8B8] to-white/30" style={{ display: "block" }}>
              Intelligence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[#A1A8B8] font-normal max-w-lg"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", lineHeight: 1.6 }}
            variants={fadeUpVariants}
          >
            We design and engineer advanced AI systems, enterprise software, and scalable digital products for ambitious businesses worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={fadeUpVariants}
          >
            <motion.a
              href="#contact"
              className="bg-white text-black hover:bg-white/90 h-14 px-8 rounded-full font-black text-xs tracking-widest uppercase flex items-center gap-2 shadow-xl shadow-white/5 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project
              <ArrowRight size={15} />
            </motion.a>

            <motion.a
              href="#portfolio"
              className="bg-transparent border border-white/[0.08] hover:border-white/[0.18] h-14 px-8 rounded-full font-black text-xs tracking-widest uppercase flex items-center gap-2 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Work
            </motion.a>
          </motion.div>

          {/* Spacing spacer */}
          <div className="h-2" />

          {/* Trust Bar metrics — GlowCard Version */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 border-t border-white/[0.06] max-w-2xl w-full"
            variants={fadeUpVariants}
          >
            {[
              { value: "50+", label: "Projects Delivered", icon: <Layers size={13} className="text-white/30" /> },
              { value: "15+", label: "AI Systems Built", icon: <Cpu size={13} className="text-white/30" /> },
              { value: "98%", label: "Satisfaction", icon: <Award size={13} className="text-white/30" /> },
              { value: "24/7", label: "Tech Support", icon: <Globe size={13} className="text-white/30" /> },
            ].map((stat, idx) => (
              <GlowCard key={idx} glowColor="green" className="min-h-[90px] w-full flex flex-col justify-between p-4">
                <div className="flex justify-between items-center w-full">
                  <span className="text-xl font-black text-white font-display leading-none">{stat.value}</span>
                  {stat.icon}
                </div>
                <span className="text-[9px] text-[#A1A8B8] uppercase tracking-widest font-semibold font-mono leading-none mt-3">
                  {stat.label}
                </span>
              </GlowCard>
            ))}
          </motion.div>

          {/* Infinite Logo Slider */}
          <motion.div
            className="w-full mt-6 border-t border-white/[0.06] logo-slider-wrapper"
            variants={fadeUpVariants}
          >
            <LogoCloud logos={heroLogos} className="w-full" />
          </motion.div>
        </motion.div>

        {/* Right Side: Professional 3D Robot Spline Canvas — Cinematic Blend */}
        <div 
          className="hidden lg:flex w-full lg:w-[48%] h-[580px] relative select-none items-center justify-center"
          style={{
            overflow: "visible",
            background: "transparent",
            border: "none",
            borderRadius: 0,
            boxShadow: "none",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
            WebkitMaskComposite: "destination-in",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
            maskComposite: "intersect",
          }}
        >
          
          {/* Spline 3D Scene */}
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full relative z-0"
            style={{ mixBlendMode: "lighten" }}
          />

          {/* Integrated Energy Core Logo on Robot's Chest */}
          <div 
            className="absolute pointer-events-none z-10"
            style={{
              top: "45.5%",
              left: "50.1%",
              transform: "translate(-50%, -50%)",
              animation: "coreLogoPulse 4s ease-in-out infinite",
            }}
          >
            <svg 
              viewBox="183 238 886 782" 
              className="w-[26px] h-[26px]"
              fill="#00ff88"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 183,238 L 184,1019 L 277,939 L 277,436 L 277,435 L 496,622 L 535,539 Z" />
              <path d="M 889,586 L 794,669 L 794,759 L 629,396 L 461,760 L 459,668 L 365,586 L 363,1019 L 435,1018 L 628,588 L 819,1018 L 888,1020 Z" />
              <path d="M 551,819 L 703,820 L 669,740 L 587,740 Z" />
              <path d="M 1069,238 L 721,539 L 759,622 L 976,436 L 975,940 L 1068,1019 Z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
