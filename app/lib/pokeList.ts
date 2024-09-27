"use server";

interface PokeType {
  name: string;
}

export const getPokemon = async (): Promise<PokeType> => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=120/");
  const pokemons = (await data.json()).results;
  return pokemons;
};
