const pokemonList = document.getElementById('pokemonList')
const moreButton = document.getElementById('moreButton')
let offset = 0;
let limit = 12;
const maxRecord = 151;

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

function loadPokemons(offset, limit) {
    PokeAPI.getPokemons(offset, limit).then((pokemons) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') 
    })
}

loadPokemons(offset, limit);

moreButton.addEventListener('click', () => {
    offset += limit;

        const qtdRecord = offset + limit;
        if (qtdRecord >= maxRecord) {
            const newLimit = maxRecord - offset;
            loadPokemons(offset,newLimit)
            moreButton.parentElement.removeChild(moreButton)
        } else {
            loadPokemons(offset,limit)
        }
})

