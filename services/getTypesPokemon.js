const getTypesPokemons = async () => {
  const URL = `https://pokeapi.co/api/v2/type`;
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error;
  }
};

export default getTypesPokemons;
