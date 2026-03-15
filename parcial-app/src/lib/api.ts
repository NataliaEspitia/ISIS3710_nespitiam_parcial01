export type Character = {
  id: string;
  name: string;
  gender: string;
  house: string;
  species: string;
  image: string;
  dateOfBirth?: string;
  ancestry?: string;
  patronus?: string;
  actor?: string;
  wizard?: boolean;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
};

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch("https://hp-api.onrender.com/api/characters", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudieron cargar los personajes");
  }

  const characters: Character[] = await response.json();
  return characters.slice(0, 12);

  
}

export async function getCharacterById(id: string): Promise<Character | null> {
  const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data: Character[] = await response.json();
  return data[0] ?? null;
}