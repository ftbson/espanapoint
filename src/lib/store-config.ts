export const STORE_CONFIG = {
  STORE_NAME: "Espanapoint",
  DELIVERY_DAYS: 3,
  SHIPPING_COST: 0,
  SHIPPING_COUNTRY: "ES",
  RETURN_DAYS: 14,
  REFUND_DAYS: 14,
  RETURN_FEES_PAYER: "customer" as "customer" | "seller",
  GUARANTEE_NEW_YEARS: 3,
  GUARANTEE_REFURBISHED_YEARS: 1,
  COMPANY: {
    address: "Calle Gran Vía 28, Planta 4, 28013 Madrid",
    phone: "+34 684 797 526",
    cif: "47609196R",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@espanapoint.es",
    hours: "Lun–Vie 8:00–19:00; sábado 9:00–17:00",
  },
  WEBSITE: "https://espanapoint.es",
  DELIVERY_TEXT:
    "Entrega en un máximo de 3 días desde la confirmación del pedido.",
  SHIPPING_TEXT: "Envío gratuito a España.",
  RETURN_TEXT: "14 días naturales para desistir desde la recepción del producto.",
  GUARANTEE_TEXT: "Garantía legal: 3 años para productos nuevos, 1 año mínimo para reacondicionados.",
} as const;

export const STORE_NAME = STORE_CONFIG.STORE_NAME;
export const DELIVERY_DAYS = STORE_CONFIG.DELIVERY_DAYS;
export const SHIPPING_COST = STORE_CONFIG.SHIPPING_COST;
export const SHIPPING_COUNTRY = STORE_CONFIG.SHIPPING_COUNTRY;
export const RETURN_DAYS = STORE_CONFIG.RETURN_DAYS;
export const REFUND_DAYS = STORE_CONFIG.REFUND_DAYS;
export const RETURN_FEES_PAYER = STORE_CONFIG.RETURN_FEES_PAYER;
export const GUARANTEE_NEW_YEARS = STORE_CONFIG.GUARANTEE_NEW_YEARS;
export const GUARANTEE_REFURBISHED_YEARS = STORE_CONFIG.GUARANTEE_REFURBISHED_YEARS;

// TODO: confirmar el identificador fiscal exacto y su coincidencia con Merchant Center.
// TODO: confirmar quién asume los gastos de devolución en caso de defecto/error.
