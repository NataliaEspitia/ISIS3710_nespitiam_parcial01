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

export default function LanguageSwitcher({ lang }: Props) {
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
    <div className="flex gap-2 text-sm font-semibold">
      <button
        onClick={() => changeLocale("en")}
        className={`cursor-pointer ${
          lang === "en" ? "text-white font-bold" : "text-white"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLocale("es")}
        className={`cursor-pointer ${
          lang === "es" ? "text-white font-bold" : "text-white"
        }`}
      >
        ES
      </button>
    </div>
  );
}