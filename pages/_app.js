import GlobalStyles from "../styles/GlobalStyles";
import { PokemonsRenderProvider } from "../context/PokemonsRenderContext";

function MyApp({ Component, pageProps }) {
  return (
    <PokemonsRenderProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </PokemonsRenderProvider>
  );
}

export default MyApp;
