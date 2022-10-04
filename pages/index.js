import Card from "../components/organisms/Card";
import FooterButtons from "../components/organisms/FooterButtons";
import Header from "../components/organisms/Header";
import Layout from "../components/organisms/Layout";
import { useContext } from "react";
import PokemonsRenderContext from "../context/PokemonsRenderContext";
import Link from "next/link";
export default function Home() {
  const {
    renderPokemons,
    setOffSet,
    offSet,
    amountPokemons,
    totalPokemonsNumber,
  } = useContext(PokemonsRenderContext);
  const paramsFooter = {
    setOffSet,
    offSet,
    amountPokemons,
    totalPokemonsNumber,
  };

  return (
    <>
      <Header />
      <Layout>
        {renderPokemons ? (
          renderPokemons.map((pokemonRender) => {
            return (
              <Link href={`/pokemonInd/${pokemonRender.name} `} key={pokemonRender.name}>
                <a>
                  <Card pokemon={pokemonRender} />
                </a>
              </Link>
            );
          })
        ) : (
          <div>Cargarndo</div>
        )}
      </Layout>
      <FooterButtons {...paramsFooter} />
    </>
  );
}
