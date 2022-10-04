import { useState } from "react";
// import Button from "../../atoms/ButtonCard";
import Habilities from "./Habilities";
import PowerLevels from "./PowerLevels";
import Evolutions from "./Evolutions";
import {WrapperCardInfo} from "./styles"
export default function CardInfo({ pokemonInfo, cardInd = false }) {
  const [info, setInfo] = useState(0);
  const selectInfo = () => {
    switch (info) {
      case 1:
        return <Evolutions />;
      case 2:
        return <PowerLevels />;
      default:
        return <Habilities pokemonInfo={pokemonInfo} cardInd={cardInd} />;
    }
  };
  return (
    <WrapperCardInfo cardInd={cardInd}>
      {/* <Button
        isLeft
        onClick={() => setInfo((prev) => prev - 1)}
        disabled={info < 1}
      >
        {"<"}
      </Button> */}
      {selectInfo()}
      {/* <Button
        isRight
        onClick={() => setInfo((prev) => prev + 1)}
        disabled={info > 1}
      >
        {">"}
      </Button> */}
    </WrapperCardInfo>
  );
}
