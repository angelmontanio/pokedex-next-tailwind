import {useState} from "react";
import tw, { styled, css } from "twin.macro";

export const PokeballBody = styled.div(({pulse=true}) => [
  tw` relative w-24 h-24 bg-white rounded-full flex items-center justify-center  z-10 border-4 border-black overflow-hidden`,
  css`
    max-width: 1280px;
  `,
  css`
    ::before {
      content: "";
      position: absolute;
      background: red;
      width: 100%;
      height: 50%;
      top: 0;
    }
    ::after {
        content:"";
        position: absolute;
        top: calc(50% - 3px);
        width: 100%;
        height: 50%;
        background: white;
        border-top: 5px solid;
    }
    :hover {
        animation: none;
    }
  `,
  pulse && tw`animate-pulse`,
]);

const Button = styled.div(()=>[
    tw`w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 border-4 border-black`,
])

const Pokeball = () => {
    const [pulse, setPulse] = useState(true);
    const activePulse = ()=>{
        setPulse(!pulse);
    }
  return (
    <PokeballBody type="button" pulse={pulse} onClick={activePulse}>
      <Button></Button>
    </PokeballBody>
  );
};

export default Pokeball;
