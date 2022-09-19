import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
//Estilos
import { FotterStyle, ButtonsContainerStyle, ButtonStyle } from "./styles";

const FooterButtons = ({
  setOffSet,
  offSet,
  amountPokemons,
  totalPokemonsNumber,
}) => {
  const handlePrevPage = () => {
    setOffSet((prev) => prev - amountPokemons);
  };
  const handleNextPage = () => {
    setOffSet((prev) => prev + amountPokemons);
  };
  const totalPage = Math.ceil(totalPokemonsNumber / amountPokemons);
  const actualPage = totalPage > 0 ? offSet / amountPokemons + 1 : 0;

  return (
    <FotterStyle>
      <ButtonsContainerStyle>
        <ButtonStyle
          type='button'
          onClick={handlePrevPage}
          disabled={offSet <= 0}
        >
          <FaHandPointLeft />
        </ButtonStyle>
        <ButtonStyle
          type='button'
          onClick={handleNextPage}
          disabled={actualPage >= totalPage}
        >
          <FaHandPointRight />
        </ButtonStyle>
      </ButtonsContainerStyle>
      <div>
        Pagina {actualPage} de {totalPage}
      </div>
    </FotterStyle>
  );
};

export default FooterButtons;
