import CardInfo from "../../molecules/CardInfo";
import { WrapperCardInfo } from "./bg-color-styles";
import { useEffect, useState } from "react";
import getOnePokemon from "../../../services/getOnePokemon";
import {
  HeaderPokemonName,
  Text,
  ImgContainer,
  Interrogation,
  Img,
} from "./styles";
import useOnePokemon from "../../../hook/useOnePokemon";

const Card = ({ pokemon }) => {
  
  const { pokemonInfo, image } = useOnePokemon(pokemon);

  return (
    Object.keys(pokemonInfo).length > 0 && (
      <WrapperCardInfo
        type={pokemonInfo?.types?.[0].type?.name}
      >
        <HeaderPokemonName >
          <Text>{pokemonInfo.name}</Text>
        </HeaderPokemonName>
        {image ? (
          <ImgContainer >
            <Img
              src={
                pokemonInfo.sprites?.other?.dream_world.front_default ||
                pokemonInfo.sprites?.front_default
              }
              alt=''
            />
          </ImgContainer>
        ) : (
          <ImgContainer>
            <Interrogation>?</Interrogation>
          </ImgContainer>
        )}
        <CardInfo pokemonInfo={pokemonInfo} />
      </WrapperCardInfo>
    )
  );
};

export default Card;
