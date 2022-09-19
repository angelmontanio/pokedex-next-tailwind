import tw, { styled, css } from "twin.macro";

export const FotterStyle = styled.div(() => [
  tw` w-full bg-primary h-28 m-auto flex justify-center items-center flex-col`,
  css`
    max-width: 1280px;
  `,
]);

export const ButtonsContainerStyle = styled.div`
  ${tw`flex`},
`;

export const ButtonStyle = styled.button`
  ${tw`bg-white rounded-sm mr-2 w-20 h-8 self-center text-2xl flex justify-center items-center`},
`;
