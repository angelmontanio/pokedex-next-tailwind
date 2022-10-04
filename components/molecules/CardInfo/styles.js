import tw, { styled, css } from "twin.macro";

//-------CardInfo-index----------//
export const WrapperCardInfo = styled.div(({cardInd})=>[
  tw`px-8 relative bg-white h-52 w-72 m-auto -mt-10 pt-8 z-0 rounded-lg shadow-lg`,
  cardInd && 
  tw`w-full m-auto mt-36 mt-0 border-none shadow-xl`,
  cardInd  && 
  css`
    max-width: 50%;
    min-width: 500px;
    height: 500px;
  `,
]);


//--------CardInfo-habilities-----//
export const WrapperHabilities = styled.div`
  ${tw`flex flex-col justify-center items-center`}
`;

export const TableHabilities = styled.div`
  ${tw`grid grid-cols-2 gap-2`}
`;

export const Celda = styled.div`
  ${tw`w-28 h-16 text-center p-2`}
`;

export const TitleCelda = styled.h3`
  ${tw`font-bold`}
`;

export const ContentCelda = styled.p`
  ${tw`text-sm`}
`;


