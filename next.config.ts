import type { NextConfig } from "next";

// When deploying to GitHub Pages (project site), the site is served from
// https://<user>.github.io/<repo>/ so a basePath is required. The GitHub
// Actions workflow injects this value via NEXT_PUBLIC_BASE_PATH. Locally it is
// empty, so `next dev` keeps working at http://localhost:3000.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Produce a fully static site in the `out/` folder on `next build`.
  output: "export",

  // GitHub Pages cannot run the Next.js image optimizer, so serve images as-is.
  images: {
    unoptimized: true,
  },

  // Prefix routes/assets when hosted under a sub-path (e.g. /repo-name).
  basePath,
  assetPrefix: basePath || undefined,

  // Emit `/route/index.html` so static hosts resolve clean URLs reliably.
  trailingSlash: true,

  // @ts-ignore - allowedDevOrigins is needed by next dev server for mobile previewing
  allowedDevOrigins: ["192.168.0.102", "localhost:3000", "localhost:3001", "localhost:3002"],
};

export default nextConfig;
