import { MetadataRoute } from 'next';
import { PRODUCTS_DATA, getProductUrl } from "@/lib/products";
import { STORE } from "@/lib/store";

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
  ];

  return [
    ...publicRoutes.map((route) => ({
      url: `${STORE.website}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...PRODUCTS_DATA.map((product) => ({
      url: `${STORE.website}${getProductUrl(product)}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}