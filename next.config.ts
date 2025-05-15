import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fly-pocketbase-dawn.fly.dev",
        port: "",
        pathname: "/api/files/**",
      }
    ],
  },
};

export default nextConfig;