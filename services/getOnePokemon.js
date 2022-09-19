const getOnePokemon = async (URL)=>{
    try {
        const response = await fetch(URL, {
            method: "GET"
        })
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("error")
        return ["error"]
    }
}

export default getOnePokemon;