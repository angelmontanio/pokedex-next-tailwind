
import tw, { styled } from "twin.macro";

export const HeaderPokemonName = styled.div(() => [
  tw`h-10 border-b mb-1 flex justify-center items-center `,
]);

export const Text = styled.p(() => [
  tw`text-center p-1 font-black text-black  text-2xl z-10`,
]);

export const ImgContainer = styled.p(() => [tw`relative h-52 z-10`]);
