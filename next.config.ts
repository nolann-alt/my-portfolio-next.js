import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: process.env.GITHUB_ACTIONS ? "export" : undefined,
  images: {
    // Disable image optimization for static export (GitHub Pages)
    unoptimized: process.env.GITHUB_ACTIONS ? true : undefined,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
