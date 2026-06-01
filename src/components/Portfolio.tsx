"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  useLocalWebimg?: boolean;
  tech: string[];
  outcome: string;
  description: string;
  customMockup?: React.ReactNode;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "AI", "Mobile Apps", "E-Commerce", "SaaS", "Enterprise"];

  const projects: Project[] = [
    {
      title: "OmniAgent Platforms",
      category: "AI",
      image: "/webimg.png",
      useLocalWebimg: true,
      tech: ["OpenAI API", "Next.js", "LangChain", "Pinecone"],
      outcome: "Automated 85% of Customer Queries",
      description: "An autonomous multi-agent platform designed to resolve complex, multi-system enterprise customer support tasks in seconds.",
    },
    {
      title: "ShopEase Storefronts",
      category: "E-Commerce",
      image: "",
      tech: ["React Native", "Next.js", "Stripe API", "PostgreSQL"],
      outcome: "+142% Increase in Conversion",
      description: "Next-generation digital storefront optimized with real-time recommendation engines, micro-second checkout systems, and sleek transitions.",
      customMockup: (
        <div className="flex flex-col gap-2 p-5 bg-[#030508]/80 border border-white/[0.06] rounded-2xl w-[80%] h-[70%] font-mono text-[9px] text-white/40 justify-center">
          <div className="flex justify-between border-b border-white/5 pb-2 text-[10px] text-white font-bold font-sans">
            <span>Checkout Platform</span>
            <span className="text-emerald-400 font-mono">ONLINE</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Auth Status</span>
            <span className="text-white">APPROVED</span>
          </div>
          <div className="flex justify-between">
            <span>Tx Delay</span>
            <span className="text-white">12ms</span>
          </div>
          <div className="flex justify-between">
            <span>Secure Gate</span>
            <span className="text-white">STRIPE_V3</span>
          </div>
        </div>
      )
    },
    {
      title: "NovaCore Analytics",
      category: "SaaS",
      image: "",
      tech: ["TypeScript", "FastAPI", "MongoDB", "Docker"],
      outcome: "40% Operational Efficiency Gain",
      description: "A highly resilient cloud database dashboard aggregating business analytics and projecting growth trends using neural networks.",
      customMockup: (
        <div className="flex flex-col gap-2 p-5 bg-[#030508]/80 border border-white/[0.06] rounded-2xl w-[80%] h-[70%] text-left justify-center">
          <span className="text-[9px] font-bold text-text-secondary tracking-widest font-mono uppercase">DATA MATRIX</span>
          <div className="flex items-end gap-1 h-8 mt-1">
            {[30, 70, 50, 40, 90, 60, 80].map((h, i) => (
              <div key={i} className="w-full bg-white/20 rounded-xs" style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="text-[8px] font-mono text-text-secondary mt-1">RETRIEVING DB_CLUSTERS...</span>
        </div>
      )
    },
    {
      title: "Apex Cloud Networks",
      category: "Enterprise",
      image: "",
      tech: ["Next.js", "AWS Cloud", "Python", "TensorFlow"],
      outcome: "99.99% Uptime SLA",
      description: "Secure, isolated core network infrastructure and ML-powered threat detection system engineered for global companies.",
      customMockup: (
        <div className="flex flex-col gap-2 p-5 bg-[#030508]/80 border border-white/[0.06] rounded-2xl w-[80%] h-[70%] font-mono text-[9px] text-white/40 justify-center">
          <span className="text-[10px] text-white font-bold font-sans border-b border-white/5 pb-2 uppercase tracking-wider">Apex Shield Active</span>
          <div className="flex justify-between mt-1">
            <span>Threat Ratio</span>
            <span className="text-emerald-400 font-bold">0.00%</span>
          </div>
          <div className="flex justify-between">
            <span>Edge Nodes</span>
            <span className="text-white">1,450 ACTIVE</span>
          </div>
        </div>
      )
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="portfolio" className="relative py-32 bg-[#030508] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.04]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-xs font-bold text-white/40 tracking-widest uppercase font-mono">// PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-[1.1]">
              SOME PROJECTS WE ARE <br />
              <span className="text-gradient bg-gradient-to-r from-white via-white to-white/40">
                PROUD OF
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-white text-black shadow-md shadow-white/5"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white/[0.015] border border-white/[0.05] hover:border-white/[0.12] rounded-3xl flex flex-col group h-full transition-all duration-500 overflow-hidden"
              >
                {/* Visual Image Section */}
                <div className="relative aspect-video w-full bg-[#030508] overflow-hidden flex items-center justify-center border-b border-white/[0.05]">
                  {/* Subtle inner card lights */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)]" />

                  {/* Displaying actual high-quality web image for OmniAgent project */}
                  {project.useLocalWebimg ? (
                    <div className="relative w-[90%] h-[80%] rounded-2xl overflow-hidden border border-white/[0.08] group-hover:scale-[1.02] transition-transform duration-700 ease-out shadow-2xl">
                      <Image
                        src="/webimg.png"
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  ) : (
                    // Premium Custom Visual Mockup instead of cheap pulsing cyber dots
                    <div className="relative w-[90%] h-[80%] rounded-2xl border border-white/[0.08] flex items-center justify-center overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-white/[0.02]">
                      <div className="absolute inset-0 grid-bg opacity-10" />
                      {project.customMockup}
                    </div>
                  )}

                  {/* Category chip */}
                  <div className="absolute top-4 left-4 bg-black/80 border border-white/[0.05] backdrop-blur-md px-3.5 py-1.5 rounded-full text-[9px] font-bold tracking-widest text-text-secondary uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Info Text Content */}
                <div className="p-8 flex flex-col gap-6 flex-grow text-left">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors duration-300 font-display uppercase">
                      {project.title}
                    </h3>
                    <div className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg text-[9px] font-bold tracking-widest text-white uppercase h-fit whitespace-nowrap font-mono">
                      {project.outcome}
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.04]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-lg text-[9px] font-bold text-text-secondary font-mono tracking-wider uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Case Study button */}
                  <div className="mt-auto pt-6 border-t border-white/[0.04] flex items-center gap-2 text-[10px] font-bold tracking-widest text-text-secondary uppercase group-hover:text-white transition-colors duration-300 cursor-pointer">
                    Explore Case Study
                    <ArrowUpRight size={14} className="text-text-secondary group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
