import type { Product } from "@/lib/products";
import {
  buildDescription,
  getProductUrl,
  toAbsoluteProductImage,
} from "@/lib/products";
import { SITE_URL, siteConfig } from "@/lib/siteConfig";

export function getProductJsonLd(product: Product) {
  const condition = {
    new: "NewCondition",
    refurbished: "RefurbishedCondition",
    used: "UsedCondition",
  }[product.condition];
  const availability = {
    InStock: "InStock",
    OutOfStock: "OutOfStock",
    PreOrder: "PreOrder",
  }[product.availability];
    const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: siteConfig.shipping.country,
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: siteConfig.returns.days,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/ReturnShippingFees",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    ...(product.color ? { color: product.color } : {}),
    image: product.images.map(toAbsoluteProductImage),
    description: buildDescription(product),
    sku: product.slug,
    ...(product.gtin13 ? { gtin13: product.gtin13 } : {}),
    ...(product.mpn ? { mpn: product.mpn } : {}),
    itemCondition: `https://schema.org/${condition}`,
    ...(product.warrantyMonths > 0
      ? {
          hasWarrantyPromise: {
            "@type": "WarrantyPromise",
            durationOfWarranty: {
              "@type": "QuantitativeValue",
              value: product.warrantyMonths,
              unitCode: "MON",
            },
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}${getProductUrl(product)}`,
      priceCurrency: product.priceCurrency,
      price: product.price.toFixed(2),
      availability: `https://schema.org/${availability}`,
      itemCondition: `https://schema.org/${condition}`,
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: siteConfig.shipping.cost,
          currency: product.priceCurrency,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: siteConfig.shipping.country,
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: siteConfig.shipping.handlingMinDays,
            maxValue: siteConfig.shipping.handlingMaxDays,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: siteConfig.shipping.transitMinDays,
            maxValue: siteConfig.shipping.transitMaxDays,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: returnPolicy,
    },
  };
}
