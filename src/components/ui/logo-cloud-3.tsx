"use client";

import React from "react";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const heroLogos: Logo[] = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  // Triple the logos list to make sure it covers wide screens and has no gap during scroll loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      {...props}
      className={`overflow-hidden py-3 relative ${className || ""}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <style>{`
        @keyframes logoInfiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .logo-infinite-track {
          display: flex;
          align-items: center;
          gap: 42px;
          width: max-content;
          animation: logoInfiniteScroll 20s linear infinite;
        }
        .logo-infinite-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="logo-infinite-track">
        {duplicatedLogos.map((logo, i) => (
          <img
            key={`logo-${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            className="pointer-events-none h-4 md:h-5 select-none opacity-40 hover:opacity-75 transition-opacity duration-300 brightness-0 invert"
            style={{ width: "auto" }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
