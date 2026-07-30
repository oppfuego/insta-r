const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "TiwaPulse";

/**
 * Splits the brand name into two halves so the logo can accent the second one
 * ("Tiwa" + "Pulse"). Falls back to a 50/50 split for names without an
 * internal capital letter.
 */
function splitBrand(name: string): [string, string] {
  const match = name.match(/^([A-Z][a-z0-9]*)(.+)$/);
  if (match) return [match[1], match[2]];
  const mid = Math.ceil(name.length / 2);
  return [name.slice(0, mid), name.slice(mid)];
}

const [brandPrefix, brandSuffix] = splitBrand(companyName);

export const siteConfig = {
  name: companyName,
  brandPrefix,
  brandSuffix,
  slug: companyName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "tiwapulse.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_FRONTEND_URL ||
    "http://localhost:3000",
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || "Social Media Growth Platform",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Boost your social media presence with premium likes, followers, and views for Instagram, TikTok, and YouTube.",
  companyName,
  companyLegalName: process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME || "",
  companyNumber: process.env.NEXT_PUBLIC_COMPANY_NUMBER || "",
  companyVat: process.env.NEXT_PUBLIC_COMPANY_VAT || "",
  companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "",
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "",
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "",
  // Optional — legal pages hide the "Last updated" line when this is unset.
  legalLastUpdated: process.env.NEXT_PUBLIC_LEGAL_LAST_UPDATED || "",
  testMode: process.env.NEXT_PUBLIC_PAYMENT_TEST_MODE === "true",
  baseCurrency: (process.env.NEXT_PUBLIC_BASE_CURRENCY as "GBP" | "EUR" | "USD") || "GBP",
  supportedCurrencies: ["GBP", "EUR", "USD"] as const,
  frontendUrl: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000",
} as const;

export type SupportedCurrency = (typeof siteConfig.supportedCurrencies)[number];
