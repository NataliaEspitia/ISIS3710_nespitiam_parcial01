import type { Dictionary } from "../dictionaries";

type Props = { dict: Dictionary };

export default function Footer({ dict }: Props) {
  return (
    <footer className="w-full bg-[#BBCCBB] text-black font-bold">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-3">
              <span>{dict.footer.text}</span>
              <span>{dict.footer.text2}</span>
      </div>            
    </footer>
  );
}

