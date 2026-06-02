"use client";

import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { useLanguage } from "@/components/LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials.items;

  return (
    <section id="testimonials" className="w-full py-28 px-6 bg-[#080808] overflow-hidden">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00FF94] mb-4 font-medium">
          {t.testimonials.kicker}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {t.testimonials.titleLine1}
          <br />
          {t.testimonials.titleLine2}
        </h2>
      </div>

      <div className="flex items-center justify-center w-full">
        <CircularTestimonials
          testimonials={[...items]}
          autoplay={true}
          colors={{
            name: "#ffffff",
            designation: "#00FF94",
            testimony: "#a1a1aa",
            arrowBackground: "#1a1a1a",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#00FF94",
          }}
          fontSizes={{
            name: "24px",
            designation: "14px",
            quote: "17px",
          }}
        />
      </div>
    </section>
  );
}
