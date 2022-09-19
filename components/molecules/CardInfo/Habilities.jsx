import {WrapperHabilities, TableHabilities, Celda, TitleCelda, ContentCelda} from "./styles";

export default function Habilities({ pokemonInfo }) {
  return (
    !!pokemonInfo && (
      <WrapperHabilities>
        {pokemonInfo?.types?.length > 1
          ? pokemonInfo?.types?.[0]?.type.name +
            "/" +
            pokemonInfo?.types?.[1]?.type.name
          : pokemonInfo?.types?.[0]?.type.name}
        <TableHabilities>
          <Celda>
            <TitleCelda>HP</TitleCelda>
            <ContentCelda>{pokemonInfo?.stats?.[0]?.base_stat}</ContentCelda>
          </Celda>
          <Celda>
            <TitleCelda>Attack</TitleCelda>
            <ContentCelda>{pokemonInfo?.stats?.[1]?.base_stat}</ContentCelda>
          </Celda>
          <Celda>
            <TitleCelda>Defence</TitleCelda>
            <ContentCelda>{pokemonInfo?.stats?.[2]?.base_stat}</ContentCelda>
          </Celda>
          <Celda>
            <TitleCelda>Speed</TitleCelda>
            <ContentCelda>{pokemonInfo?.stats?.[5]?.base_stat}</ContentCelda>
          </Celda>
        </TableHabilities>
      </WrapperHabilities>
    )
  );
}
