import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    // Disable ESLint during the build process
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
