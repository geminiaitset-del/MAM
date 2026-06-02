"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Palette, Code, Rocket, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Process() {
  const { t } = useLanguage();

  const stepIcons = [
    <Search key="search" className="w-6 h-6" style={{ stroke: "rgba(0, 255, 136, 0.4)" }} />,
    <Compass key="compass" className="w-6 h-6" style={{ stroke: "rgba(0, 255, 136, 0.4)" }} />,
    <Palette key="palette" className="w-6 h-6" style={{ stroke: "rgba(0, 255, 136, 0.4)" }} />,
    <Code key="code" className="w-6 h-6" style={{ stroke: "rgba(0, 255, 136, 0.4)" }} />,
    <Rocket key="rocket" className="w-6 h-6" style={{ stroke: "rgba(0, 255, 136, 0.4)" }} />,
    <TrendingUp key="trend" className="w-6 h-6" style={{ stroke: "rgba(0, 255, 136, 0.4)" }} />,
  ];

  const steps = t.process.steps.map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, "0"),
    icon: stepIcons[index],
  }));

  return (
    <section id="process" className="relative py-28 bg-[#080808] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-24 text-center items-center">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(0, 255, 136, 0.5)" }}>
            {t.process.kicker}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
            {t.process.titleLine1} <br />
            {t.process.titleLine2}
          </h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-xl">
            {t.process.description}
          </p>
        </div>

        {/* Timeline Infographic Grid */}
        <div className="relative">
          {/* Vertical progress line for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/5 hidden lg:block">
            <motion.div
              className="w-full origin-top"
              style={{ height: "100%", backgroundColor: "rgba(0, 255, 136, 0.15)" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-16 lg:gap-20 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 relative ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left or Right Content Card */}
                  <div className="w-full lg:w-[45%]">
                    <motion.div
                      className="glow-card p-8 flex flex-col gap-4 relative z-10 hover:border-white/20 transition-all duration-300"
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 18 }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-bold tracking-widest uppercase" style={{ color: "rgba(0, 255, 136, 0.4)", fontSize: "8px" }}>
                          {step.subtitle}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white tracking-tight font-display">{step.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 hidden lg:flex">
                    <motion.div
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-bold shadow-2xl relative"
                      style={{ backgroundColor: "rgba(0, 255, 136, 0.15)" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <span className="relative z-10 text-sm font-mono font-bold" style={{ color: "#00ff88" }}>
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Spacer Column for Symmetry */}
                  <div className="w-full lg:w-[45%] hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
