import { useEffect, useState } from "react";
import getOnePokemon from "../services/getOnePokemon";

const useOnePokemon = (pokemon) => {
    console.log(pokemon);
  const [pokemonInfo, setPokemonInfo] = useState({});
  useEffect(() => {
    pokemon &&
      getOnePokemon(pokemon?.url)
        .then((pokemon) => {
          setPokemonInfo(pokemon);
        })
        .catch((error) => {
          console.log("error");
        });
  }, [pokemon]);
  const image = !!pokemonInfo.sprites?.other?.dream_world.front_default || !!pokemonInfo.sprites?.front_default;
  return { pokemonInfo, image };
};

export default useOnePokemon;
