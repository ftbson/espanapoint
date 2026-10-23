const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (
  configuredSiteUrl || "https://www.espanapoint.es"
).replace(/\/$/, "");

const returnDays = 14;
const shippingCost: number = 0;

// ⚠️ Passer à true UNIQUEMENT quand le paiement par carte est réellement actif au checkout
const cardPaymentEnabled = false;

export const siteConfig = {
  shipping: {
    country: "ES",
    handlingMinDays: 0,
    handlingMaxDays: 1,
    transitMinDays: 1,
    transitMaxDays: 3,
    cost: shippingCost,
    label: "Envío gratuito en 24–72 h",
  },
  returns: {
    days: returnDays,
    label: `Devolución en ${returnDays} días naturales, gastos de devolución a cargo del cliente`,
    shippingPaidBy: "customer",
  },
  cardPaymentEnabled,
  paymentLabel: cardPaymentEnabled
    ? "Pago seguro con tarjeta o transferencia bancaria"
    : "Pago por transferencia bancaria",
  warranty: {
    newMonths: 36,
    refurbishedMonths: 12,
    usedMonths: 12,
  },
  legal: {
    email: "contact@espanapoint.es",
    companyName: process.env.NEXT_PUBLIC_COMPANY_NAME?.trim() || "Espana Point",
    taxId: process.env.NEXT_PUBLIC_TAX_ID?.trim() || "B73940157",
  },
} as const;

export function getReturnsLabel(): string {
  return siteConfig.returns.label;
}