import Link from "next/link";
import LanguageSwitcher from "./LanguageSwicther";
import type { Locale, Dictionary } from "../dictionaries";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export default function Header({ lang, dict }: Props) {
  return (
    <header className="bg-purple-800 text-white p-4">
      <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Link href={`/${lang}`}>{dict.nav.home}</Link>
        <Link href={`/${lang}/profile`}>{dict.nav.profile}</Link>

        <div style={{ marginLeft: "auto" }}>
          <LanguageSwitcher lang={lang} dict={dict} />
        </div>
      </nav>
    </header>
  );
}