import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  WraperInputComponent,
  WraperResultsContainer,
  WraperResultsItem,
  WraperInput,
} from "./styles";
import {} from "./styles";
const InputSearchPokemons = ({ namesSearch }) => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult(
      namesSearch
        .filter((name) => name.includes(search.toLowerCase()))
        .slice(0, 10)
    );
  }, [search]);
  const searchPokemonInd = (name) => {
    router.push(`/pokemonInd/${name}`);
  };
  return (
    <WraperInputComponent>
      <WraperInput
        type='text'
        placeholder='Busca tu pokemon'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <WraperResultsContainer>
        {search &&
          searchResult?.map((name) => (
            <WraperResultsItem onClick={() => searchPokemonInd(name)}>
              {name}
            </WraperResultsItem>
          ))}
      </WraperResultsContainer>
    </WraperInputComponent>
  );
};

export default InputSearchPokemons;
