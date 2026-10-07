import {
  getProductBrand,
  getProductDescription,
  getProductUrl,
  getVerifiedProductCondition,
  PRODUCTS_DATA,
} from "@/lib/products";
import { STORE } from "@/lib/store";

function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

function getFeedReadyProducts() {
  return PRODUCTS_DATA.flatMap((product) => {
    const brand = getProductBrand(product);
    const condition = getVerifiedProductCondition(product);

    if (!brand || !product.availability || !condition) {
      return [];
    }

    const image = product.image.startsWith("http")
      ? product.image
      : `${STORE.website}${product.image}`;

    return [{ product, brand, condition, image }];
  });
}

export async function GET() {
  const products = getFeedReadyProducts();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${cdata(STORE.name)}</title>
    <link>${cdata(STORE.website)}</link>
    <description>${cdata(`Catalogue de produits ${STORE.name}`)}</description>
    ${products
      .map(({ product, brand, condition, image }) => {
        const productUrl = `${STORE.website}${getProductUrl(product)}`;

        return `<item>
      <g:id>${cdata(String(product.id))}</g:id>
      <g:title>${cdata(product.name)}</g:title>
      <g:description>${cdata(getProductDescription(product))}</g:description>
      <g:link>${cdata(productUrl)}</g:link>
      <g:image_link>${cdata(image)}</g:image_link>
      <g:price>${product.price.toFixed(2)} EUR</g:price>
      <g:availability>${product.availability}</g:availability>
      <g:condition>${condition}</g:condition>
      <g:brand>${cdata(brand)}</g:brand>
      <g:product_type>${cdata(product.category)}</g:product_type>
      ${product.gtin ? `<g:gtin>${cdata(product.gtin)}</g:gtin>` : ""}
      ${product.mpn ? `<g:mpn>${cdata(product.mpn)}</g:mpn>` : ""}
    </item>`;
      })
      .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
