try {
    const list = document.querySelector('#list')

    function fetchPokemon(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
    });
    }
    
    function fetchPokemonList(number){
        for (let i = 1; i <= number; i++){
            fetchPokemon(i)
        }
    }

    function createPokemon(pokemon){
        const cardContainer = document.createElement('li');
        cardContainer.innerHTML = `
            <img src=${pokemon.sprites.front_default}></img>
            <h2>${pokemon.name}</h2>
            `
        list.appendChild(cardContainer)
    }

    fetchPokemonList(9)

} catch (error) {
    alert('error')
}