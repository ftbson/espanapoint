import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c0.lestechnophiles.com",
        pathname: "/images.frandroid.com/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
