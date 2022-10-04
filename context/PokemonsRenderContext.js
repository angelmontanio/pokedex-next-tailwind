import { createContext, useMemo } from "react";
import { useState, useEffect } from "react";
import getAllPokemons from "../services/getAllPokemons";
import getPokemonsForType from "../services/getPokemonsForType";
import getTypesPokemons from "../services/getTypesPokemon";
const PokemonsRenderContext = createContext({});

export function PokemonsRenderProvider({ children }) {
  const [renderPokemons, setRenderPokemons] = useState([]); //Pokemons rederizandose
  const [offSet, setOffSet] = useState(0); //Valor de inicio para cortar pokemons
  const [amountPokemons, setAmountPokemons] = useState(6); //Cantidad de tarjetas renderizadas por pagina y valor final para cortar array de pokemons
  const [pokemonType, setPokemonType] = useState("all");
  const [allPokemons, setAllPokemons] = useState([]);
  const [namesSearch, setNamesSearch] = useState([]);
  const [typesPokemons, setTypesPokemons] = useState([]);
  let totalPokemonsNumber = 0;

  //Carga todos los pokemons o por tipo
  useEffect(() => {
    if (pokemonType === "all") {
      getAllPokemons()
        .then(({ data, names }) => {
          setNamesSearch(names);
          setAllPokemons(data);
        })
        .catch((error) => {
          setRenderPokemons([]);
        });
    } else {
      getPokemonsForType(pokemonType)
        .then(({ data, names }) => {
          setNamesSearch(names);
          setAllPokemons(data);
        })
        .catch((error) => {
          console.log(error);
          setRenderPokemons([]);
        });
    }
  }, [pokemonType]);

  //Carga los tipos de pokemon
  useEffect(() => {
    getTypesPokemons()
      .then((data) => {
        setTypesPokemons(data);
      })
      .catch((error) => {
        setRenderPokemons([]);
      });
  }, []);

  useEffect(() => {
    setRenderPokemons(allPokemons?.slice(offSet, amountPokemons + offSet));
  }, [amountPokemons, offSet, allPokemons]);

  useEffect(() => {
    setOffSet(0);
  }, [amountPokemons, pokemonType]);

  totalPokemonsNumber = allPokemons?.length;
  return (
    <PokemonsRenderContext.Provider
      value={{
        amountPokemons,
        setAmountPokemons,
        renderPokemons,
        setRenderPokemons,
        setOffSet,
        offSet,
        pokemonType,
        setPokemonType,
        totalPokemonsNumber,
        typesPokemons,
        namesSearch,
      }}
    >
      {children}
    </PokemonsRenderContext.Provider>
  );
}

export default PokemonsRenderContext;
