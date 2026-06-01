"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  isActive: boolean;
}

export default function TechStack() {
  const technologies: TechItem[] = [
    { name: "React", category: "Frontend Framework", isActive: true },
    { name: "Next.js", category: "Core Architecture", isActive: true },
    { name: "TypeScript", category: "Core Language", isActive: false },
    { name: "Node.js", category: "Backend Runtime", isActive: false },
    { name: "Flutter", category: "Mobile System", isActive: false },
    { name: "Python", category: "AI & Scripting", isActive: true },
    { name: "FastAPI", category: "High-Performance API", isActive: true },
    { name: "PostgreSQL", category: "Relational DB", isActive: false },
    { name: "MongoDB", category: "Document DB", isActive: false },
    { name: "Docker", category: "Deployment Container", isActive: false },
    { name: "AWS Cloud", category: "Infrastructure", isActive: true },
    { name: "OpenAI Models", category: "Neural Integration", isActive: false },
    { name: "Anthropic API", category: "Cognitive Models", isActive: false },
    { name: "LangChain", category: "Agent Orchestration", isActive: false },
    { name: "Pinecone DB", category: "Vector Database", isActive: true },
    { name: "TensorFlow", category: "Deep Learning Engine", isActive: false },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 18 },
    },
  };

  return (
    <section id="tech-stack" className="relative py-32 bg-[#080808] overflow-hidden">
      {/* Subtle top dividing line matching other sections */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.04]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 max-w-2xl text-left">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
            TECH STACK
          </h2>
          <p className="text-[#888888] text-base leading-relaxed mt-2">
            Our systems are built on high-performance frameworks, state-of-the-art vector databases, global-scale clouds, and advanced cognitive integrations.
          </p>
        </div>

        {/* Tech Wall Grid - 4 Columns, Uniform sizing */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              className="group rounded-[10px] px-[18px] py-[16px] h-[88px] flex flex-col justify-between cursor-default transition-all duration-200 ease-out relative overflow-hidden"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTop: "1px solid rgba(0,255,136,0.1)",
                boxSizing: "border-box"
              }}
              variants={itemVariants}
              whileHover={{ 
                y: -3,
                backgroundColor: "#141414",
                borderColor: "rgba(0, 255, 136, 0.2)"
              }}
            >
              {/* Card Header: Tech Name and Top-Right Status Dot */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[15px] font-semibold text-white tracking-tight"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {tech.name}
                </span>
                
                {/* 5px circle status dot (active: #00ff88, inactive: #333333) */}
                <span 
                  className={`w-1.5 h-1.5 rounded-full ${
                    tech.isActive ? "bg-[#00ff88]" : "bg-[#333333]"
                  }`} 
                />
              </div>

              {/* Card Footer: Category Label */}
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-[#555555] tracking-[0.14em] uppercase font-mono">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
