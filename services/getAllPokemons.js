const getAllPokemons = async ()=>{
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0}`
    try {
        const response = await fetch(URL,{
            method: "GET"
        })
        const data = await response.json()
        return {data:data.results, names: data.results.map(pokemon=>pokemon.name)};
    } catch (error) {
        return error
    }
}

export default getAllPokemons;