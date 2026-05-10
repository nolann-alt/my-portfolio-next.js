import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Always enable static export for GitHub Pages
  output: "export",
  // Base path for subfolder deployment
  basePath: "/my-portfolio-next.js",
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
