import "server-only";
import en from "./dictionaries/en.json";

export type Dictionary = typeof en;

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
} as const;

export type Locale = keyof typeof dictionaries;

export function hasLocale(value: string): value is Locale {
  return value in dictionaries;
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}