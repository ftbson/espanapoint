import { SITE_URL, siteConfig } from "@/lib/siteConfig";

export const STORE_CONFIG = {
  STORE_NAME: "Espanapoint",
  DELIVERY_DAYS: siteConfig.shipping.transitMaxDays,
  SHIPPING_COST: siteConfig.shipping.cost,
  SHIPPING_COUNTRY: siteConfig.shipping.country,
  RETURN_DAYS: siteConfig.returns.days,
  REFUND_DAYS: siteConfig.returns.days,
  RETURN_FEES_PAYER: (siteConfig.returns.feeRate > 0
    ? "customer"
    : "seller") as "customer" | "seller",
  GUARANTEE_NEW_YEARS: siteConfig.warranty.newMonths / 12,
  GUARANTEE_REFURBISHED_YEARS: siteConfig.warranty.refurbishedMonths / 12,
  COMPANY: {
    address: "Calle Gran Vía 28, Planta 4, 28013 Madrid",
    phone: "+34 684 797 526",
    email: siteConfig.legal.email,
    hours: "Lun–Vie 8:00–19:00 y sábado 9:00–17:00",
  },
  WEBSITE: SITE_URL,
  DELIVERY_TEXT: siteConfig.shipping.label,
  SHIPPING_TEXT: siteConfig.shipping.label,
  RETURN_TEXT: siteConfig.returns.label,
  GUARANTEE_TEXT: `Garantía: ${siteConfig.warranty.newMonths / 12} años para productos nuevos y ${siteConfig.warranty.refurbishedMonths / 12} año para productos reacondicionados.`,
} as const;

export const STORE_NAME = STORE_CONFIG.STORE_NAME;
export const DELIVERY_DAYS = STORE_CONFIG.DELIVERY_DAYS;
export const DELIVERY_TEXT = STORE_CONFIG.DELIVERY_TEXT;
export const SHIPPING_COST = STORE_CONFIG.SHIPPING_COST;
export const SHIPPING_COUNTRY = STORE_CONFIG.SHIPPING_COUNTRY;
export const SHIPPING_TEXT = STORE_CONFIG.SHIPPING_TEXT;
export const RETURN_DAYS = STORE_CONFIG.RETURN_DAYS;
export const RETURN_TEXT = STORE_CONFIG.RETURN_TEXT;
export const REFUND_DAYS = STORE_CONFIG.REFUND_DAYS;
export const RETURN_FEES_PAYER = STORE_CONFIG.RETURN_FEES_PAYER;
export const GUARANTEE_NEW_YEARS = STORE_CONFIG.GUARANTEE_NEW_YEARS;
export const GUARANTEE_REFURBISHED_YEARS =
  STORE_CONFIG.GUARANTEE_REFURBISHED_YEARS;
export const GUARANTEE_TEXT = STORE_CONFIG.GUARANTEE_TEXT;

// TODO: confirmar el identificador fiscal exacto y su coincidencia con Merchant Center.
// TODO: confirmar quién asume los gastos de devolución en caso de defecto/error.
