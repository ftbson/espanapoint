import type { NextConfig } from "next";
import { PRODUCTS_DATA } from "./src/lib/products";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return PRODUCTS_DATA.flatMap((product) =>
      product.canonicalOf
        ? [
            {
              source: `/produits/${product.slug}`,
              destination: `/produits/${product.canonicalOf}`,
              permanent: true,
            },
          ]
        : [],
    );
  },
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
