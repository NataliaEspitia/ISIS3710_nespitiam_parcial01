"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "../dictionaries";
import type { Dictionary } from "../dictionaries";


type Props = {
  lang: Locale;
  dict: Dictionary;
};

function setLangCookie(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({ lang, dict }: Props) {
  const router = useRouter();
  const pathname = usePathname(); 

  function changeLocale(nextLocale: Locale) {
    setLangCookie(nextLocale);

    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const nextPath = segments.join("/") || `/${nextLocale}`;

    router.push(nextPath);
  }

  return (
    <label>
      {dict.language.label}{" "}
      <select
        value={lang}
        onChange={(e) => changeLocale(e.target.value as Locale)}
        className="border rounded px-2 py-1 text-black-700 bg-purple px-2 py-1 rounded hover:text-black"
      >
        <option value="en" >{dict.language.en}</option>
        <option value="es">{dict.language.es}</option>
      </select>
    </label>
  );
}