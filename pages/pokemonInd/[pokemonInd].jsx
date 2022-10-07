import { useRouter } from "next/router";
import useOnePokemon from "../../hook/useOnePokemon";
import BgColor from "../../utils/bgColorStyes";
import tw, { styled, css } from "twin.macro";

const Pokemon = () => {
  const router = useRouter();
  const { pokemonInd } = router.query;
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonInd}`;
  const pokemon = {
    name: pokemonInd,
    url: URL,
  };
  const { pokemonInfo } = useOnePokemon(pokemon);

  return (
    <div tw='h-screen'>
      <BgColor type={pokemonInfo?.types?.[0].type?.name}>
        {pokemonInfo.name}
      </BgColor>
    </div>
  );
};

export default Pokemon;
