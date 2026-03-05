import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.clipartmax.com',
        port: '',
        pathname: '/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png',
        search: '',
      },
    ],
  },
}

export default nextConfig;
