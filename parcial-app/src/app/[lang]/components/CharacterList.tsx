import { getCharacters } from "@/lib/api";
import Card from "./Card";

type Props = {
  lang: string;
};

export default async function CharacterList({ lang }: Props) {
  const characters = await getCharacters();

  return (
    <section className="mx-auto max-w-7xl px-6 py-4">
      <div className="grid grid-cols-1 gap-40 md:grid-cols-2 lg:grid-cols-3">     
          {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}