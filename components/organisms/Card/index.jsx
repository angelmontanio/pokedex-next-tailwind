import CardInfo from "../../molecules/CardInfo";
import tw, { styled, css, theme } from "twin.macro";
import { WrapperCardInfo } from "./bg-color-styles";
import { useEffect, useState } from "react";
import getOnePokemon from "../../../services/getOnePokemon";
import { HeaderPokemonName, Text, ImgContainer } from "./styles";

const Card = ({ pokemon }) => {
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

  return (
    pokemonInfo && (
      <WrapperCardInfo type={pokemonInfo?.types?.[0].type?.name}>
        <HeaderPokemonName>
          <Text>{pokemonInfo.name}</Text>
        </HeaderPokemonName>
        <ImgContainer>
          <img
            tw='m-auto w-48 h-48'
            src={pokemonInfo.sprites?.other?.dream_world.front_default}
            alt=''
          />
        </ImgContainer>
        <CardInfo pokemonInfo={pokemonInfo} />
      </WrapperCardInfo>
    )
  );
};

export default Card;
