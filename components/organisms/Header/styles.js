import tw, { styled, css } from "twin.macro";

//------Header-Index--------//
export const WrapperHeader = styled.div(() => [
  tw` w-full bg-primary m-auto fixed top-0 z-20 left-0 right-0`,
  css`
    max-width: 1280px;
  `,
]);

export const WrapperHeaderContainer = styled.div(() => [
  tw` h-28 flex m-auto`,
  css`
    max-width: 1000px;
  `,
]);

export const WrapperMenuHead = styled.div`
  ${tw`flex w-1/2 justify-end items-center`}
`;

export const LogoContainer = styled.div`
  ${tw` w-1/2 relative flex justify-start items-center`}
`;

//-------Header-selectores------//
export const OptionStyle = styled.option(() => [
  tw`
    bg-primary text-white h-10
    `,
  css``,
]);
export const LabelStyle = styled.label(() => [
  tw`
    text-white bg-black px-2 flex h-10 items-center border border-white
    `,
  css``,
]);

export const SelectStyle = styled.select(() => [
  tw`
    bg-primary text-white border border-white h-10 flex items-center mr-2
    `,
]);
