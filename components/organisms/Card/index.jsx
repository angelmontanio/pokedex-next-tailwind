import CardInfo from "../../molecules/CardInfo";
import tw from "twin.macro";
import { WrapperCardInfo } from "./bg-color-styles";
import { useEffect, useState } from "react";
import getOnePokemon from "../../../services/getOnePokemon";
import { HeaderPokemonName, Text, ImgContainer, Interrogation, Img } from "./styles";



const Card = ({ pokemon, cardInd = false }) => {
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
  const image = !!pokemonInfo.sprites?.other?.dream_world.front_default || !!pokemonInfo.sprites?.front_default;

  return (
    Object.keys(pokemonInfo).length > 0 && (
      <WrapperCardInfo type={pokemonInfo?.types?.[0].type?.name} cardInd={cardInd}>
        <HeaderPokemonName cardInd={cardInd}>
          <Text cardInd={cardInd}>{pokemonInfo.name}</Text>
        </HeaderPokemonName>
        {image ?
          <ImgContainer cardInd={cardInd}>
            <Img
              cardInd={cardInd}
              src={pokemonInfo.sprites?.other?.dream_world.front_default || pokemonInfo.sprites?.front_default}
              alt=''
            />
          </ImgContainer>
          :
          <ImgContainer cardInd={cardInd}>
            <Interrogation>?</Interrogation>
          </ImgContainer>
        }
        <CardInfo pokemonInfo={pokemonInfo} cardInd={cardInd}/>
      </WrapperCardInfo>
    )
  );
};

export default Card;
