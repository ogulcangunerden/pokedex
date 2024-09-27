import Link from "next/link";
import { getPokemon } from "./lib/pokeList";

interface PokeType {
  name: string;
  url: string;
}
export default async function Home() {
  const pokemons: PokeType[] = await getPokemon();

  return (
    <div className="grid grid-cols-3 gap-4">
      {pokemons?.map((poke, index) => {
        const pokeId = poke.url.split("/")[6];
        const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <Link href={`/pokemon/${pokeId}`}>
              <div className="text-center items-center justify-center">
                <img height={150} width={150} src={pokeImage} alt={poke.name} />
                <h1 className="text-white">{poke.name}</h1>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
