import tw, { styled, css } from "twin.macro";

export const WrapperCardInfo = styled.div(({ type = false, from}) => [ 
  tw`border border-yellow-400 border-8 w-80 h-96 m-3 rounded-lg`,
  css`
    height: 28rem;
  `,
]);

export const HeaderPokemonName = styled.div(() => [
  tw`h-10 border-b mb-1 flex justify-center items-center `,
]);

export const Text = styled.p(() => [
  tw`text-center p-1 font-black text-black  text-2xl z-10`,
]);

export const ImgContainer = styled.div(() => [tw`relative h-52 z-10`]);

export const Img = styled.img(() => [tw`m-auto w-48 h-48`]);

export const Interrogation = styled.p(() => [
  tw` text-gray-400 text-center`,
  css`
    font-size: 90px;
  `,
]);
