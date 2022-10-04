import tw, { styled, css } from "twin.macro";
import { useContext } from "react";
import PokemonsRenderContext from "../../../context/PokemonsRenderContext";
import NumberPokemons from "./NumberPokemons";
import TypePokemons from "./TypePokemons";
import {
  WrapperHeader,
  WrapperHeaderContainer,
  WrapperMenuHead,
  LogoContainer,
  WrapperMenuHeadContent
} from "./styles";
import Pokeball from "../../molecules/Pokeball";
import InputSearchPokemons from "./InputSearchPokemons";

const Header = () => {
  const { setAmountPokemons, pokemonType, setPokemonType, typesPokemons, namesSearch} =
    useContext(PokemonsRenderContext);

  return (
    <WrapperHeader>
      <WrapperHeaderContainer>
        <LogoContainer>
          <Pokeball/>
        </LogoContainer>
        <WrapperMenuHead>
          <WrapperMenuHeadContent>
          <NumberPokemons setAmountPokemons={setAmountPokemons} />

          <TypePokemons
            pokemonType={pokemonType}
            setPokemonType={setPokemonType}
            typesPokemons={typesPokemons}
          />
          </WrapperMenuHeadContent>

          <InputSearchPokemons namesSearch={namesSearch}/>
        </WrapperMenuHead>
      </WrapperHeaderContainer>
    </WrapperHeader>
  );
};

export default Header;
