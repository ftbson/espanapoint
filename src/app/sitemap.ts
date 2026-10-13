import { MetadataRoute } from "next";
import { PRODUCTS_DATA, getProductUrl } from "@/lib/products";
import { SITE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = [
    "",
    "/produits",
    "/vedette",
    "/contact",
    "/cgv",
    "/politica-de-privacidad",
    "/politica-de-envio",
    "/politica-de-devoluciones",
    "/politica-de-cookies",
    "/aviso-legal",
  ];

  return [
    ...publicRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...PRODUCTS_DATA.filter((product) => !product.canonicalOf).map(
      (product) => ({
        url: `${SITE_URL}${getProductUrl(product)}`,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }),
    ),
  ];
}
