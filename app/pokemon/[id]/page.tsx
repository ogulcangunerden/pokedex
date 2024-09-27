"use client";
import { useParams } from "next/navigation";

interface PokemonDetail {
  name: string;
  sprites: { front_default: string };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

export default async function PokemonDetailPage() {
  const { id } = useParams(); // useRouter yerine useParams kullanıyoruz

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: PokemonDetail = await res.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        width={300}
        height={300}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mb-4"
      />
      <h1 className="text-white text-4xl mb-4">{pokemon.name}</h1>
      <p className="text-white">Height: {pokemon.height}</p>
      <p className="text-white">Weight: {pokemon.weight}</p>
      <p className="text-white">
        Types: {pokemon.types.map((type) => type.type.name).join(", ")}
      </p>
    </div>
  );
}
