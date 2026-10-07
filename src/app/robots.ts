import type { MetadataRoute } from "next";
import { STORE } from "@/lib/store";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/", "/panier"],
    },
    sitemap: `${STORE.website}/sitemap.xml`,
  };
}
