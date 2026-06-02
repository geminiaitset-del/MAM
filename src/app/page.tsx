import React from "react";
import { LanguageProvider } from "@/components/LanguageProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIBrain from "@/components/AIBrain";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileFallback from "@/components/MobileFallback";

export default function Home() {
  return (
    <LanguageProvider>
      {/* Premium loader */}
      <LoadingScreen />

      {/* Mobile animation visibility fallback */}
      <MobileFallback />

      {/* Global Glassmorphic Nav */}
      <Navbar />

      {/* Structured Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* Section 01: Hero with Pedestal 3D float */}
        <Hero />

        {/* Section 02: 6 Services Grid with custom mouse glows */}
        <Services />

        {/* Section 03: AI Lab capability Canvas Plexus */}
        <AIBrain />

        {/* Section 04: Project showcases apple-inspired */}
        <Portfolio />

        {/* Section 05: Scroll timeline progress infographic */}
        <Process />

        {/* Section 06: Interactive Tech wall */}
        <TechStack />

        {/* Section 07: Rating and Glass Card carousel */}
        <Testimonials />

        {/* Section 08: Hook-Form & Zod Contact with Success Card */}
        <Contact />
      </main>

      {/* Reusable corporate footer */}
      <Footer />
    </LanguageProvider>
  );
}
