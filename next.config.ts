import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", 
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.1.5'], // Added the IP address
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;