import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/idyllwild-coffee',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
