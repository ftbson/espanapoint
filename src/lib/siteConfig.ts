const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (
  configuredSiteUrl || "https://www.espanapoint.es"
).replace(/\/$/, "");

const returnFeeRate: number = 0.02;
const returnDays: number = 14;
const shippingCost: number = 0;

export const siteConfig = {
  shipping: {
    country: "ES",
    handlingMinDays: 0,
    handlingMaxDays: 1,
    transitMinDays: 1,
    transitMaxDays: 3,
    cost: shippingCost,
    label: "Envío en 24–72 h",
  },
  returns: {
    days: returnDays,
    feeRate: returnFeeRate,
    label:
      returnFeeRate === 0
        ? `Devolución gratuita en ${returnDays} días`
        : `Devolución en ${returnDays} días, con gastos de gestión del ${returnFeeRate * 100} %`,
  },
  paymentLabel: "Pago por transferencia bancaria",
  warranty: {
    newMonths: 36,
    refurbishedMonths: 12,
    usedMonths: 12,
  },
  legal: {
    email: "contact@espanapoint.es",
    companyName:
      process.env.NEXT_PUBLIC_COMPANY_NAME?.trim() ||
      "<TODO: completar razón social>",
    taxId:
      process.env.NEXT_PUBLIC_TAX_ID?.trim() || "<TODO: completar NIF/CIF>",
  },
} as const;

export function getReturnsLabel(): string {
  return siteConfig.returns.label;
}
