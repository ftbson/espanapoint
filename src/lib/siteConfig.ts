const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (
  configuredSiteUrl || "https://www.espanapoint.es"
).replace(/\/$/, "");

const returnDays = 14;
const shippingCost = 0;

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
    // Aucun frais de gestion : le client ne paie que le transport retour
    label: `Devolución en ${returnDays} días naturales`,
    shippingPaidBy: "customer",
  },
  // À remplacer dès que le paiement par carte est actif
  paymentLabel: "Pago seguro con tarjeta o transferencia bancaria",
  warranty: {
    newMonths: 36,
    refurbishedMonths: 12,
    usedMonths: 12,
  },
  legal: {
    email: "contact@espanapoint.es",
    companyName:
      process.env.NEXT_PUBLIC_COMPANY_NAME?.trim() || "Espana Point",
    taxId: process.env.NEXT_PUBLIC_TAX_ID?.trim() || "B73940157",
  },
} as const;

export function getReturnsLabel(): string {
  return siteConfig.returns.label;
}