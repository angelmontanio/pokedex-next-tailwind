import CardInfo from "../../molecules/CardInfo";
import {
  HeaderPokemonName,
  Text,
  ImgContainer,
  Interrogation,
  Img,
  WrapperCardInfo,
} from "./styles";
import useOnePokemon from "../../../hook/useOnePokemon";
import BgColor  from "../../../utils/bgColorStyes";

const Card = ({ pokemon }) => {
  const { pokemonInfo, image } = useOnePokemon(pokemon);

  return (
    Object.keys(pokemonInfo).length > 0 && (
      <WrapperCardInfo>
        <BgColor type={pokemonInfo?.types?.[0].type?.name}>
          <HeaderPokemonName>
            <Text>{pokemonInfo.name}</Text>
          </HeaderPokemonName>
          {image ? (
            <ImgContainer>
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
        </BgColor>
      </WrapperCardInfo>
    )
  );
};

export default Card;
