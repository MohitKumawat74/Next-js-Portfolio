import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marketifythemes.net',
        port: '',
        pathname: '/html/grax/img/**',
      },
    ],
  },
};

export default nextConfig;
