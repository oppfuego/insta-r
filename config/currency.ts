import { SupportedCurrency } from "./site";

const conversionRates: Record<SupportedCurrency, number> = {
  GBP: 1,
  EUR: 1.17,
  USD: 1.25,
};

const currencySymbols: Record<SupportedCurrency, string> = {
  GBP: "£",
  EUR: "€",
  USD: "$",
};

const currencyLocales: Record<SupportedCurrency, string> = {
  GBP: "en-GB",
  EUR: "de-DE",
  USD: "en-US",
};

export function convertFromGBP(amountGBP: number, currency: SupportedCurrency): number {
  return +(amountGBP * conversionRates[currency]).toFixed(2);
}

export function convertToGBP(amount: number, currency: SupportedCurrency): number {
  return +(amount / conversionRates[currency]).toFixed(2);
}

export function getCurrencySymbol(currency: SupportedCurrency): string {
  return currencySymbols[currency];
}

export function formatCurrency(amountGBP: number, currency: SupportedCurrency): string {
  const converted = convertFromGBP(amountGBP, currency);
  return `${currencySymbols[currency]}${converted.toFixed(2)}`;
}

export function formatAmount(amount: number, currency: SupportedCurrency): string {
  return `${currencySymbols[currency]}${amount.toFixed(2)}`;
}

export { conversionRates };
