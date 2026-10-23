import {
  STORE_CONFIG,
  STORE_NAME,
  DELIVERY_DAYS,
  SHIPPING_COST,
  SHIPPING_COUNTRY,
  RETURN_DAYS,
  REFUND_DAYS,
  RETURN_FEES_PAYER,
  GUARANTEE_NEW_YEARS,
  GUARANTEE_REFURBISHED_YEARS,
} from "@/lib/store-config";
import { SITE_URL, siteConfig } from "@/lib/siteConfig";

export {
  STORE_CONFIG,
  STORE_NAME,
  DELIVERY_DAYS,
  SHIPPING_COST,
  SHIPPING_COUNTRY,
  RETURN_DAYS,
  REFUND_DAYS,
  RETURN_FEES_PAYER,
  GUARANTEE_NEW_YEARS,
  GUARANTEE_REFURBISHED_YEARS,
};

export const STORE = {
  name: STORE_CONFIG.STORE_NAME,
  companyName: siteConfig.legal.companyName || "Espana Point",
  cif: siteConfig.legal.taxId || "B73940157",
  address: {
    street: STORE_CONFIG.COMPANY.address,
    postalCode: "28013",
    locality: "Madrid",
    country: "España",
  },
  phone: STORE_CONFIG.COMPANY.phone,
  phoneLink: STORE_CONFIG.COMPANY.phone.replace(/\s+/g, ""),
  email: siteConfig.legal.email,
  website: SITE_URL,
} as const;
