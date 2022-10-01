import {OptionStyle, LabelStyle, SelectStyle} from "./styles"
export default function NumberPokemons({ setAmountPokemons }) {
  return (
    <>
      <LabelStyle htmlFor='pokemonNumbers'>Pokemons</LabelStyle>
      <SelectStyle kemonNumber onChange={(e) => setAmountPokemons(+e.target.value)}>
        <OptionStyle value={6}>6</OptionStyle>
        <OptionStyle value={9}>9</OptionStyle>
        <OptionStyle value={12}>12</OptionStyle>
        <OptionStyle value={15}>15</OptionStyle>
      </SelectStyle>
    </>
  );
}
