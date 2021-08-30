const solicitud = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/25')
        .then(response => response.json())
        .then(pokemon => {
            console.log(`El pokemon consumido es: ${pokemon.species.name}, felicitaciones lo lograste!!!`);
        });
}

module.exports = { solicitud };