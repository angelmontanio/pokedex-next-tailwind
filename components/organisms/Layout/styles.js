import tw, { styled, css } from "twin.macro";

export const LayoutPage = styled.div(() => [
    tw` w-full m-auto flex flex-wrap justify-center justify-items-center border border-red-300`,
    css`
    max-width: 1280px;
  `,
  ]);