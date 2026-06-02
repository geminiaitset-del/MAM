"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function AIBrain() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const layerMeta = [
    { num: "01", tag: "CORE_EDGE_GATEWAY.SH" },
    { num: "02", tag: "ORCHESTRATOR_SERVICE.SYS" },
    { num: "03", tag: "COGNITIVE_MESH_DB.NET" },
    { num: "04", tag: "HARDWARE_GRID_INFRA.SYS" },
  ];

  const systemLayers = t.aiBrain.layers.map((layer, index) => ({
    ...layerMeta[index],
    ...layer,
  }));

  return (
    <section id="ai-lab" className="relative py-32 bg-[#080808] overflow-hidden">
      {/* Top clean dividing line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.04]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Systems Statement & Dynamic Details */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-white/45 tracking-[0.2em] uppercase font-mono">
              {t.aiBrain.kicker}
            </span>
            <h2 className="text-4xl md:text-5.5xl font-display font-black text-white uppercase tracking-tight leading-[1.05]">
              {t.aiBrain.titleLine1} <br />
              {t.aiBrain.titleLine2}
            </h2>
            <p className="text-[#A1A8B8] text-base leading-relaxed max-w-lg mt-2">
              {t.aiBrain.description}
            </p>
          </div>

          {/* Details Row - Absolute Purity */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/[0.06] max-w-lg">
            {t.aiBrain.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <span className="text-2xl font-semibold text-white font-mono tracking-tighter">{metric.value}</span>
                <span className="text-[9px] text-[#A1A8B8] uppercase tracking-widest font-semibold font-mono">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Architectural Systems Stack Display */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[500px] flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2 px-2">
              <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">{t.aiBrain.stackTitle}</span>
              <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">{t.aiBrain.systemState}</span>
            </div>

            {systemLayers.map((layer, idx) => {
              const isHovered = hoveredIndex === idx;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`glow-card relative border p-6 rounded-2xl cursor-default transition-all duration-300 ${
                    isHovered
                      ? "border-white/[0.15] bg-[#0f0f0f] translate-y-[-4px]"
                      : isAnyHovered
                      ? "border-white/[0.02] bg-white/[0.002] opacity-40"
                      : "border-white/[0.05] bg-white/[0.015]"
                  }`}
                  style={{
                    boxShadow: isHovered ? "0 20px 40px -10px rgba(0,0,0,0.8)" : "none",
                  }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-white/30">{layer.num}</span>
                        <span className="text-[9px] font-mono text-white/60 tracking-wider bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md">
                          {layer.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-white mt-1">{layer.title}</h3>
                      <p
                        className={`text-[11px] text-[#A1A8B8] mt-1.5 leading-relaxed overflow-hidden transition-all duration-300 ${
                          isHovered ? "max-h-[80px] opacity-100" : "max-h-0 opacity-0 my-0 py-0"
                        }`}
                      >
                        {layer.desc}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-[8px] font-mono text-[#A1A8B8] uppercase tracking-widest bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded-md flex items-center gap-1">
                        <span className={`w-1 h-1 rounded-full ${idx === 0 ? "bg-white/70 animate-pulse" : "bg-white/40"}`} />
                        {layer.status}
                      </span>
                      {isHovered && (
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                          <ArrowUpRight size={14} className="text-white/40" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-white/[0.04] mt-4 pt-3 text-[8.5px] font-mono text-white/35 tracking-wider">
                    <span>{layer.metrics}</span>
                    <span className="text-white/20">{t.common.secure}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
