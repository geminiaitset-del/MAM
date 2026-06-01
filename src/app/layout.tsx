import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAM Company — Advanced AI Solutions & Software Engineering",
  description: "Building premium next-generation AI agents, custom mobile/web platforms, enterprise systems, and scalable digital products that transform ambitious ideas into market-leading software.",
  keywords: [
    "MAM Company",
    "Advanced AI Solutions",
    "AI Agents",
    "Enterprise Software",
    "Mobile Applications",
    "E-Commerce Platforms",
    "Custom Systems Development",
    "SaaS Products",
    "Digital Transformation",
    "Software Engineering"
  ],
  authors: [{ name: "MAM Company" }],
  openGraph: {
    title: "MAM Company — Advanced AI Solutions & Software Engineering",
    description: "Building premium next-generation AI agents, custom mobile/web platforms, and enterprise software.",
    type: "website",
    locale: "en_US",
    siteName: "MAM Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAM Company — Advanced AI Solutions & Software Engineering",
    description: "Building premium next-generation AI agents, custom systems, and digital products.",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} h-full antialiased dark scroll-smooth`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-white antialiased">
        {/* Tactile organic grain texture overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
