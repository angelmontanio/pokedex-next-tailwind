import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getOnePokemon from "../../services/getOnePokemon";
import Card from '../../components/organisms/Card';


const Pokemon = () => {
  const router = useRouter();
  const { pokemonInd } = router.query;
  const [pokemonInfo, setPokemonInfo] = useState({});
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonInd}`

  const pokemon = {
    name: pokemonInd,
    url: URL
  }

  return (
    <div>
      <Card pokemon={pokemon}/>
    </div>
  );
};

export default Pokemon;