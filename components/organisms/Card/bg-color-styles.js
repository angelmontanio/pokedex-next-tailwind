import tw, { styled, css } from "twin.macro";
const WrapperCardInfo = styled.div(({ type = false, cardInd}) => [
  tw`border border-yellow-400 border-8 w-80 h-96 m-3 rounded-lg  pb-8`,
  css`
    height: 28rem;
  `,
  cardInd === true && 
    tw`w-full h-full m-auto mt-36 h-screen mt-0 border-none rounded-none`,
    
  type === "normal" &&
  css`
    background: linear-gradient(rgb(115, 82, 89), rgb(186, 112, 127));
  `,
type === "fighting" &&
  css`
    background: linear-gradient(rgb(150, 64, 42), rgb(233, 91, 54));
  `,
type === "flying" &&
  css`
    background: linear-gradient(rgb(150, 64, 42), rgb(233, 91, 54));
  `,
type === "poison" &&
  css`
    background: linear-gradient(rgb(91, 49, 132), rgb(196, 142, 249));
  `,
type === "ground" &&
  css`
    background: linear-gradient(rgb(101, 64, 8), rgb(156, 102, 20));
  `,
type === "rock" &&
  css`
    background: linear-gradient(rgb(126, 126, 126), rgb(185, 185, 186));
  `,
type === "bug" &&
  css`
    background: linear-gradient(rgb(74, 182, 72), rgb(195, 222, 163));
  `,
type === "ghost" &&
  css`
    background: linear-gradient(rgb(50, 53, 105), rgb(90, 97, 221));
  `,
type === "steel" &&
  css`
    background: linear-gradient(rgb(94, 115, 108), rgb(155, 183, 173));
  `,
type === "fire" &&
  css`
    background: linear-gradient(rgb(230, 144, 30), rgb(231, 92, 53));
  `,
type === "water" &&
  css`
    background: linear-gradient(rgb(131, 185, 255), rgb(20, 121, 251));
  `,
type === "grass" &&
  css`
    background: linear-gradient(rgb(177, 219, 188), rgb(195, 222, 163));
  `,
type === "electric" &&
  css`
    background: linear-gradient(rgba(255, 245, 208, 1), rgba(246, 189, 32, 1));
  `,
type === "psychic" &&
  css`
    background: linear-gradient(rgb(12, 19, 149), rgb(142, 148, 254));
  `,
type === "dragon" &&
  css`
    background: linear-gradient(rgb(71, 138, 147), rgb(141, 214, 224));
  `,
type === "dark" &&
  css`
    background: linear-gradient(rgb(11, 14, 13), rgb(79, 79, 79));
  `,
type === "fairy" &&
  css`
    background: linear-gradient (rgb(151, 27, 69), rgb(197, 89, 126));
  `,
type === "ice" &&
  css`
    background: linear-gradient (rgb(111, 190, 223), rgb(196, 235, 251));
  `,
type === "shadow" &&
  css`
    background: transparent;
  `,
type === "unknown" &&
  css`
    background: transparent;
  `,
]);

export { WrapperCardInfo };