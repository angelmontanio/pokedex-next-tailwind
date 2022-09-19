import tw, { styled, css } from "twin.macro";

//------Header-Index--------//
export const WrapperHeader = styled.div(() => [
  tw` w-full bg-primary m-auto`,
  css`
    max-width: 1280px;
  `,
]);

export const WrapperHeaderContainer = styled.div(() => [
  tw` h-28 flex justify-between py-10 m-auto`,
  css`
    max-width: 1000px;
  `,
]);

export const WrapperMenuHead = styled.div`
  ${tw`flex`}
`;
export const LogoContainer = styled.div`
  ${tw`w-40 -mt-16`}
`;

//-------Header-selectores------//
export const OptionStyle = styled.option(() => [
  tw`
    bg-primary text-white
    `,
  css``,
]);
export const LabelStyle = styled.label(() => [
  tw`
    text-white bg-black px-2 flex items-center border border-white
    `,
  css``,
]);

export const SelectStyle = styled.select(() => [
  tw`
    bg-primary text-white border border-white flex items-center mr-2
    `,
]);
