import {
  buildDescription,
  getProductCanonicalUrl,
  toAbsoluteProductImage,
  PRODUCTS_DATA,
} from "@/lib/products";
import { SITE_URL, siteConfig } from "@/lib/siteConfig";

function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

function getFeedProducts() {
  return PRODUCTS_DATA.filter((product) => !product.canonicalOf);
}

export async function GET() {
  const items = getFeedProducts()
    .map((product) => {
      const availability = {
        InStock: "in_stock",
        OutOfStock: "out_of_stock",
        PreOrder: "preorder",
      }[product.availability];
      const images = product.images.map(toAbsoluteProductImage);

      return `<item>
      <g:id>${cdata(product.slug)}</g:id>
      <g:title>${cdata(product.name)}</g:title>
      <g:description>${cdata(buildDescription(product))}</g:description>
      <g:link>${cdata(getProductCanonicalUrl(product))}</g:link>
      <g:image_link>${cdata(images[0])}</g:image_link>
      ${images
        .slice(1)
        .map(
          (image) =>
            `<g:additional_image_link>${cdata(image)}</g:additional_image_link>`,
        )
        .join("\n      ")}
      <g:availability>${availability}</g:availability>
      <g:price>${product.price.toFixed(2)} ${product.priceCurrency}</g:price>
      <g:brand>${cdata(product.brand)}</g:brand>
      <g:condition>${product.condition}</g:condition>
      ${product.gtin13 ? `<g:gtin>${cdata(product.gtin13)}</g:gtin>` : ""}
      ${product.mpn ? `<g:mpn>${cdata(product.mpn)}</g:mpn>` : ""}
      ${product.gtin13 || product.mpn ? "" : "<g:identifier_exists>no</g:identifier_exists>"}
      <g:shipping>
        <g:country>${siteConfig.shipping.country}</g:country>
        <g:service>${cdata(siteConfig.shipping.label)}</g:service>
        <g:price>${siteConfig.shipping.cost.toFixed(2)} ${product.priceCurrency}</g:price>
        <g:min_handling_time>${siteConfig.shipping.handlingMinDays}</g:min_handling_time>
        <g:max_handling_time>${siteConfig.shipping.handlingMaxDays}</g:max_handling_time>
        <g:min_transit_time>${siteConfig.shipping.transitMinDays}</g:min_transit_time>
        <g:max_transit_time>${siteConfig.shipping.transitMaxDays}</g:max_transit_time>
      </g:shipping>
      <g:return_policy_label>${cdata(siteConfig.returns.label)}</g:return_policy_label>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Espanapoint</title>
    <link>${cdata(SITE_URL)}</link>
    <description>${cdata("Catálogo de productos de Espanapoint")}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
