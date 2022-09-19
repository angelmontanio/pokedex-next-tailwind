const getPokemonsForType = async (type) => {
  const URL = type;
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    const formated = data.pokemon.map((pokemon) => {
      return {
        name: pokemon.pokemon.name,
        url: pokemon.pokemon.url,
      };
    });
    return { data: formated, names: formated.map((pokemon) => pokemon.name) };
  } catch (error) {
    return ["No hay internet"];
  }
};

export default getPokemonsForType;
