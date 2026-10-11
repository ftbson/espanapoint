import type { Product } from "@/lib/products";
import { STORE } from "@/lib/store";

export function getProductJsonLd(product: Product) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || STORE.website).replace(
    /\/+$/,
    ""
  );

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    ...(product.color ? { color: product.color } : {}),
    image: product.image,
    description: product.description,
    sku: product.sku,
    itemCondition: `https://schema.org/${product.itemCondition}`,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/produits/${product.sku}`,
      priceCurrency: product.priceCurrency,
      price: product.price.toFixed(2),
      availability: `https://schema.org/${product.availability}`,
    },
  };
}
