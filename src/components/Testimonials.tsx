"use client";

import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "Professional, fast, and exceptionally skilled. The custom SaaS platform has zero latency, looks beautiful, and scales perfectly under heavy traffic. Their engineering quality is peerless.",
    name: "David Smith",
    designation: "Founder, Taskly",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    quote:
      "Their AI systems transformed how we operate. The team deeply understands enterprise needs and delivers with precision and speed we haven't seen elsewhere.",
    name: "Sarah Chen",
    designation: "CTO, NexaFlow",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
  },
  {
    quote:
      "From architecture to deployment, every detail was handled with care. The result exceeded our expectations both technically and visually.",
    name: "Marcus Webb",
    designation: "CEO, Orbix Systems",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-28 px-6 bg-[#080808] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00FF94] mb-4 font-medium">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Trusted by businesses
          <br />
          like yours
        </h2>
      </div>

      {/* Testimonials Component */}
      <div className="flex items-center justify-center w-full">
        <CircularTestimonials
          testimonials={testimonials}
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
