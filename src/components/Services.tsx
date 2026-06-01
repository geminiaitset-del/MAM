"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BrainCircuit, Bot, Smartphone, Globe, ShoppingBag, Cpu, ArrowUpRight } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: <BrainCircuit className="w-7 h-7 text-white" />,
      title: "AI Solutions",
      description:
        "Custom Machine Learning systems, computer vision models, and predictive intelligence engines designed to turn raw data into strategic operations.",
      colSpan: "lg:col-span-2",
      embed: (
        <div className="hidden lg:flex flex-col gap-3 p-5 bg-[#030508]/60 border border-white/[0.06] rounded-2xl w-60 text-left relative overflow-hidden backdrop-blur-md">
          <span className="text-[9px] font-bold text-text-secondary tracking-widest font-mono uppercase">Neural Engine</span>
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex justify-between items-center text-[10px] font-semibold text-white/90">
              <span>Optimizing Model</span>
              <span className="text-emerald-400 font-mono">99.8%</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-white rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Bot className="w-7 h-7 text-white" />,
      title: "AI Agents",
      description:
        "Autonomous digital workforce systems that streamline decision-making and execute complex multi-system workflows with precision.",
      colSpan: "lg:col-span-1",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-white" />,
      title: "Mobile Apps",
      description:
        "High-performance native and cross-platform mobile apps prioritizing fluid animations, gesture navigation, and premium ergonomics.",
      colSpan: "lg:col-span-1",
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: "Web Platforms",
      description:
        "Next-generation web applications, SaaS dashboards, and portal structures engineered for ultra-low latency and scalable growth.",
      colSpan: "lg:col-span-2",
      embed: (
        <div className="hidden lg:flex flex-col gap-3 p-5 bg-[#030508]/60 border border-white/[0.06] rounded-2xl w-64 text-left relative overflow-hidden backdrop-blur-md">
          <span className="text-[9px] font-bold text-text-secondary tracking-widest font-mono uppercase">API LATENCY</span>
          <div className="flex items-end gap-1.5 h-10 mt-1">
            {[40, 60, 45, 30, 80, 50, 70, 90, 60, 40].map((h, i) => (
              <div
                key={i}
                className="w-full bg-white/10 rounded-sm hover:bg-white/40 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between items-center text-[8px] font-mono text-text-secondary mt-1">
            <span>0ms</span>
            <span className="text-white font-bold">14ms AVG</span>
          </div>
        </div>
      )
    },
    {
      icon: <ShoppingBag className="w-7 h-7 text-white" />,
      title: "E-Commerce Platforms",
      description:
        "Premium scale digital storefronts optimized for high transaction speeds, checkout flows, and immersive brand presentation.",
      colSpan: "lg:col-span-2",
      embed: (
        <div className="hidden lg:flex flex-col gap-2 p-5 bg-[#030508]/60 border border-white/[0.06] rounded-2xl w-60 text-left backdrop-blur-md">
          <span className="text-[9px] font-bold text-text-secondary tracking-widest font-mono uppercase">Gross Volume</span>
          <span className="text-2xl font-black text-white font-display leading-none tracking-tight">$145,280</span>
          <span className="text-[9px] font-bold text-emerald-400 font-mono mt-1">+142% CONVERSION RATE</span>
        </div>
      )
    },
    {
      icon: <Cpu className="w-7 h-7 text-white" />,
      title: "Custom Systems",
      description:
        "Bespoke backend engines, real-time database cluster designs, complex API integrations, and resilient architecture migrations.",
      colSpan: "lg:col-span-1",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <section id="services" className="relative py-32 bg-[#030508] overflow-hidden">
      {/* Subtle border dividing sections */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.04]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-24 max-w-2xl">
          <span className="text-xs font-bold text-white/40 tracking-widest uppercase font-mono">// EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-[1.1]">
            SOLUTIONS THAT POWER <br />
            <span className="text-gradient bg-gradient-to-r from-white via-white to-white/40">
              YOUR DIGITAL GROWTH
            </span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mt-2">
            We design, build, and scale premium software products and intelligent systems that turn ambitious visions into bulletproof software.
          </p>
        </div>

        {/* Services Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              className={`relative bg-white/[0.015] border border-white/[0.05] hover:border-white/[0.12] rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden ${service.colSpan || ""}`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              onMouseMove={handleMouseMove}
            >
              {/* Refined mouse glow gradient border */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 220px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255, 255, 255, 0.03), transparent 80%)`,
                }}
              />

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10 h-full w-full relative z-10">
                {/* Text & Icon content */}
                <div className="flex flex-col gap-6 flex-1 text-left h-full justify-between">
                  <div>
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center self-start mb-6">
                      {service.icon}
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-bold text-white tracking-tight font-display uppercase">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed font-normal max-w-md">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow CTA */}
                  <div className="pt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest text-text-secondary uppercase group-hover:text-white transition-colors duration-300">
                    Read details
                    <ArrowUpRight size={14} className="text-text-secondary group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>

                {/* Optional visual embed */}
                {service.embed && (
                  <div className="relative z-10 flex-shrink-0 mt-6 lg:mt-0 flex justify-center">
                    {service.embed}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
