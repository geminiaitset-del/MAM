"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BrainCircuit, Bot, Smartphone, Globe, ShoppingBag, Cpu, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Services() {
  const { t } = useLanguage();
  const serviceContent = t.services.items;

  const servicesList = [
    {
      icon: <BrainCircuit className="w-7 h-7 text-white" />,
      title: serviceContent[0].title,
      description: serviceContent[0].description,
      colSpan: "lg:col-span-2",
      embed: (
        <div className="hidden lg:flex flex-col gap-3 p-5 bg-[#030508]/60 border border-white/[0.06] rounded-2xl w-60 text-left relative overflow-hidden backdrop-blur-md">
          <span className="text-[9px] font-bold text-text-secondary tracking-widest font-mono uppercase">{t.services.embeds.neuralEngine}</span>
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex justify-between items-center text-[10px] font-semibold text-white/90">
              <span>{t.services.embeds.optimizingModel}</span>
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
      title: serviceContent[1].title,
      description: serviceContent[1].description,
      colSpan: "lg:col-span-1",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-white" />,
      title: serviceContent[2].title,
      description: serviceContent[2].description,
      colSpan: "lg:col-span-1",
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: serviceContent[3].title,
      description: serviceContent[3].description,
      colSpan: "lg:col-span-2",
      embed: (
        <div className="hidden lg:flex flex-col gap-3 p-5 bg-[#030508]/60 border border-white/[0.06] rounded-2xl w-64 text-left relative overflow-hidden backdrop-blur-md">
          <span className="text-[9px] font-bold text-text-secondary tracking-widest font-mono uppercase">{t.services.embeds.apiLatency}</span>
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
            <span className="text-white font-bold">{t.services.embeds.avgLatency}</span>
          </div>
        </div>
      )
    },
    {
      icon: <ShoppingBag className="w-7 h-7 text-white" />,
      title: serviceContent[4].title,
      description: serviceContent[4].description,
      colSpan: "lg:col-span-2",
      embed: (
        <div className="hidden lg:flex flex-col gap-2 p-5 bg-[#030508]/60 border border-white/[0.06] rounded-2xl w-60 text-left backdrop-blur-md">
          <span className="text-[9px] font-bold text-text-secondary tracking-widest font-mono uppercase">{t.services.embeds.grossVolume}</span>
          <span className="text-2xl font-black text-white font-display leading-none tracking-tight">$145,280</span>
          <span className="text-[9px] font-bold text-emerald-400 font-mono mt-1">{t.services.embeds.conversionRate}</span>
        </div>
      )
    },
    {
      icon: <Cpu className="w-7 h-7 text-white" />,
      title: serviceContent[5].title,
      description: serviceContent[5].description,
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
          <span className="text-xs font-bold text-white/40 tracking-widest uppercase font-mono">{t.services.kicker}</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-[1.1]">
            {t.services.titleLine} <br />
            <span className="text-gradient bg-gradient-to-r from-white via-white to-white/40">
              {t.services.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mt-2">
            {t.services.description}
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
                    {t.common.readDetails}
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
