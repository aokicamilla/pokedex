function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.mainType}">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class ="type ${type}"> ${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" 
                alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

PokeAPI.getPokemons().then((pokemons) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') 
    })
