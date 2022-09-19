import { OptionStyle, LabelStyle, SelectStyle } from "./styles";
export default function TypePokemons({
  pokemonType,
  setPokemonType,
  typesPokemons,
}) {
  //Se selecciona el tipo de pokemon
  return (
    <>
      <LabelStyle htmlFor='pokemonTypes'>Type</LabelStyle>
      <SelectStyle
        name='pokemonTypes'
        onChange={(e) => setPokemonType(e.target.value)}
        value={pokemonType}
      >
        <OptionStyle value='all'>All</OptionStyle>
        {typesPokemons?.map((typePokemon) => (
          <OptionStyle key={typePokemon?.name} value={typePokemon?.url}>
            {typePokemon?.name}
          </OptionStyle>
        ))}
      </SelectStyle>
    </>
  );
}
