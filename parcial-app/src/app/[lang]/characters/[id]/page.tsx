import Image from "next/image";
import { notFound } from "next/navigation";
import { getCharacterById } from "@/lib/api";
import { getDictionary, hasLocale, type Locale } from "../../dictionaries";
import { getHouseBorderColor } from "@/lib/houseColors";
import { Metadata } from "next";


type Props = {
  params: Promise<{
    lang: string;
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const character = await getCharacterById(id);

  return {
    title: `Detalle de ${character?.name} - HarryPotterApp`,
    description:
      "Consulta información detallada de cada personaje del mundo mágico: casa, actor/actriz, varita, especie, ascendencia y otros datos relevantes.",
  };
}

export default async function CharacterDetailPage({ params }: Props) {
  const { lang, id } = await params;

  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const character = await getCharacterById(id);

  if (!character) notFound();

  const borderColor = getHouseBorderColor(character.house || "");

  return (
    <main className="min-h-screen bg-[#d9d9d9] px-6 py-10">
      <h1 className={`mb-10 text-center text-5xl font-bold text-[#FDB608] font-bold`}>
        {character.name}
      </h1>

      <div
        className={`mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border-4 bg-[#d9d9d9] shadow-lg md:grid-cols-2 ${borderColor}`}
      >
        <div className="flex items-center justify-center p-10">
          <div className="space-y-4 text-2xl text-black">
            <p>
              <span className="font-bold">{dict.characterDetail.house}: </span>
              {character.house || dict.characterDetail.unknown}
            </p>

            <p>
              <span className="font-bold">{dict.characterDetail.gender}: </span>
              {character.gender || dict.characterDetail.unknown}
            </p>


            <p>
              <span className="font-bold">{dict.characterDetail.wandWood}: </span>
              {character.wand?.wood || dict.characterDetail.unknown}
            </p>

            <p>
              <span className="font-bold">{dict.characterDetail.wandCore}: </span>
              {character.wand?.core || dict.characterDetail.unknown}
            </p>

            <p>
              <span className="font-bold">{dict.characterDetail.wandLength}: </span>
              {character.wand?.length ?? dict.characterDetail.unknown}
            </p>
          </div>
        </div>

        <div className="relative min-h-[500px] w-full">
          {character.image ? (
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xl font-bold text-gray-600">
              {dict.characterDetail.noImage}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}