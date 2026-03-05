import type { Locale, Dictionary } from "../dictionaries";
import Image from "next/image";

interface character {
    id: number;
  name: string;
  image: string;
}

interface ApiResponse {
    results: character[];
}

async function getCharacter(): Promise<ApiResponse> {
  const res = await fetch("https://hp-api.onrender.com/api/characters", {
    cache: "no-store",
  });

  return res.json();
}

//export default async function CharacterList({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  
//const members = await getCharacter();
  //  return ( 
    //);

//}
