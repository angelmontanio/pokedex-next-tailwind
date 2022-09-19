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

const Header = () => {
  const { setAmountPokemons, pokemonType, setPokemonType, typesPokemons } =
    useContext(PokemonsRenderContext);

  return (
    <WrapperHeader>
      <WrapperHeaderContainer>
        <LogoContainer>
          <img
            src='https://i.pinimg.com/originals/34/c1/e5/34c1e5d371d64a581b1902ec5c4509f4.png'
            alt=''
          />
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
