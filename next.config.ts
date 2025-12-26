import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dqazelmiyucotzhxejyg.supabase.co",
        pathname: "/storage/v1/object/public/property-images/**",
      },
    ],
    qualities: [25, 50, 75],
  },
};

export default nextConfig;
