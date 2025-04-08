import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pocketbase.rajithsanjaya.site",
        port: "",
        pathname: "/api/files/**",
      }
    ],
  },
};

export default nextConfig;