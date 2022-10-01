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
} from "./styles";
import Pokeball from "../../molecules/Pokeball";

const Header = () => {
  const { setAmountPokemons, pokemonType, setPokemonType, typesPokemons } =
    useContext(PokemonsRenderContext);

  return (
    <WrapperHeader>
      <WrapperHeaderContainer>
        <LogoContainer>
          <Pokeball/>
        </LogoContainer>
        <WrapperMenuHead>
          <NumberPokemons setAmountPokemons={setAmountPokemons} />

          <TypePokemons
            pokemonType={pokemonType}
            setPokemonType={setPokemonType}
            typesPokemons={typesPokemons}
          />

          {/* <input type='text' placeholder='busca tu pokemon' /> */}
        </WrapperMenuHead>
      </WrapperHeaderContainer>
    </WrapperHeader>
  );
};

export default Header;
