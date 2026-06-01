"use client";

import React from "react";
import MAMLogo from "./MAMLogo";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "#home" },
        { name: "Our Team", href: "#home" },
        { name: "Careers", href: "#home" },
        { name: "Blog", href: "#home" },
      ],
    },
    {
      title: "SERVICES",
      links: [
        { name: "Mobile Apps", href: "#services" },
        { name: "E-Commerce", href: "#services" },
        { name: "AI Solutions", href: "#services" },
        { name: "Web Development", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
      ],
    },
    {
      title: "WORK",
      links: [
        { name: "All Projects", href: "#portfolio" },
        { name: "Case Studies", href: "#portfolio" },
        { name: "Our Process", href: "#process" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Articles", href: "#home" },
        { name: "FAQ", href: "#home" },
        { name: "Privacy Policy", href: "#home" },
        { name: "Terms of Service", href: "#home" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#080808] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative radial lighting in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-primary-accent/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Company Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-3 self-start">
              <MAMLogo size={46} />
              <span className="text-2xl font-bold tracking-widest text-white">MAM</span>
            </a>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              MAM Company is a software engineering studio specialized in building cutting-edge digital products, premium mobile/web platforms, and advanced AI agents.
            </p>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span className="text-xs font-bold text-white tracking-widest">{col.title}</span>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-text-secondary hover:text-white transition-colors duration-300 text-sm font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Ready Column */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:items-end">
            <div className="flex flex-col gap-2 lg:text-right">
              <span className="text-xs font-bold text-text-secondary tracking-widest">READY TO START YOUR PROJECT?</span>
              <h4 className="text-lg font-semibold text-white">Let's create something world-class.</h4>
            </div>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-white/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </div>

        {/* Footer Bottom info */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-text-secondary text-xs">
            © {currentYear} MAM Company. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              {
                icon: (
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ),
                href: "#",
              },
              {
                icon: (
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "#",
              },
              {
                icon: (
                  <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
                href: "#",
              },
              {
                icon: (
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                href: "#",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                className="text-text-secondary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
