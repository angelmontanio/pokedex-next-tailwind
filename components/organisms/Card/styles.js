import tw, { styled, css } from "twin.macro";

export const HeaderPokemonName = styled.div(({ cardInd }) => [
  tw`h-10 border-b mb-1 flex justify-center items-center `,
  cardInd === true && tw`h-20 border-b-2 mb-2 flex justify-center items-center`,
  css``,
]);

export const Text = styled.p(({ cardInd }) => [
  tw`text-center p-1 font-black text-black  text-2xl z-10`,
  cardInd && tw`text-6xl`,
]);

export const ImgContainer = styled.div(({ cardInd }) => [
  tw`relative h-52 z-10`,
  cardInd && tw`h-96 z-0 w-1/2 m-auto`,
  cardInd && css`min-width: 500px;`,
]);

export const Img = styled.img(({ cardInd }) => [
  tw`m-auto w-48 h-48`,
  cardInd === true && tw` h-96 z-20 w-1/2 m-auto`,
]);

export const Interrogation = styled.p(() => [
  tw` text-gray-400 text-center`,
  css`
    font-size: 90px;
  `,
]);
