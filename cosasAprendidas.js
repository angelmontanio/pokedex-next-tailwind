//Indice
// 0. Importacion
import tw, { styled, css } from "twin.macro";

// 1. Formas de declarar variables de tailwind con twin.macro
const ComoFuncion = styled.div(() => [
  tw` w-full m-auto flex flex-wrap justify-center justify-items-center border border-red-300`,
  css`
    max-width: 1280px;
  `,
]);

export const comoVariable = styled.div`
  ${tw`flex w-1/2 justify-end items-center`}
`;

///>Ejemplo de uso de variables
const redondo ="rounded"

const Button = styled.div(()=>[
    tw`w-8 h-8 bg-white ${redondo}-full flex items-center justify-center z-10 border-4 border-black`,
])