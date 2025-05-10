import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },

  // Essential optimizations for static export
  images: {
    unoptimized: true, // Required for static exports
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["@aceternity/ui"],
    scrollRestoration: true,
  },

  // Reduce bundle size
  productionBrowserSourceMaps: false,

  // Build optimizations
  compress: true,
  staticPageGenerationTimeout: 3600,

  // Disable strict mode in production for better animation performance
  reactStrictMode: process.env.NODE_ENV === "development",

  // Enable Webpack optimizations
  webpack: (config) => {
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: "all",
      maxSize: 244 * 1024, // 244KB
    };
    return config;
  },
};

export default nextConfig;
