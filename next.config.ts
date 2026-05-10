import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Always enable static export for GitHub Pages
  output: "export",
  images: {
    // Disable image optimization for static export
    unoptimized: true,
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
