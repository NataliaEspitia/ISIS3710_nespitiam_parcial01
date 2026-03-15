import Link from "next/link";
import LanguageSwitcher from "./LanguageSwicther";
import type { Locale, Dictionary } from "../dictionaries";
import Image from "next/image";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export default function Header({ lang, dict }: Props) {
  return (
    <header className="flex flex-col items-center bg-[#FDB608] py-6">
      <div>
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            alt="Harry potter logo"
            width={250}
            height={250}
          /> </Link> </div>
          <nav style={{  gap: 12, alignItems: "center" }}>
        <div style={{ marginTop: "auto" }}>
          <LanguageSwitcher lang={lang} dict={dict} />
        </div>
        </nav>
              
    </header>
  );
}