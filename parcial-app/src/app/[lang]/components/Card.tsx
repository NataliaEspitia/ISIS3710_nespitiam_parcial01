import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/lib/api";
import { getHouseBgColor } from "@/lib/houseColors";

type Props = {
  character: Character;
  lang: string;
};

export default function CharacterCard({ character, lang }: Props) {
  const bgColor = getHouseBgColor(character.house || "");

  return (
    <Link href={`/${lang}/characters/${character.id}`}>
      <article
        className={`overflow-hidden rounded-xl w-80 shadow-lg transition-transform hover:scale-[1.2] ${bgColor}`}
      >
        <div className="p-6 text-white">
          <h2 className="text-xl font-bold text-center">{character.name}</h2>
        </div>
        <div className="relative h-110 w-full bg-[#e0e0e0]">
          {character.image ? (
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-black font-bold">
              Sin imagen
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}