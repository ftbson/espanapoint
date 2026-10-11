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
  cif: STORE_CONFIG.COMPANY.cif,
  address: {
    street: STORE_CONFIG.COMPANY.address,
    postalCode: "28013",
    locality: "Madrid",
    country: "España",
  },
  phone: STORE_CONFIG.COMPANY.phone,
  phoneLink: STORE_CONFIG.COMPANY.phone.replace(/\s+/g, ""),
  email: STORE_CONFIG.COMPANY.email,
  website: STORE_CONFIG.WEBSITE,
} as const;
