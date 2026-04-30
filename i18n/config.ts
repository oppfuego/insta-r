export const defaultLocale = "en" as const;

export const supportedLocales = ["en", "uk", "es", "de"] as const;
export type Locale = (typeof supportedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  es: "Español",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  en: "GB",
  uk: "UA",
  es: "ES",
  de: "DE",
};
