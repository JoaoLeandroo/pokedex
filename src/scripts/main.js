
const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`;
fetch(url)
.then((response) => response.json())
.then((bodyResponse) => bodyResponse.results.map((name) => {
    console.log(name.name)
    createCardPokemon()
}) )
.catch((error) => console.error(error))


const createCardPokemon = () => {
    const sectionCard = document.querySelector(".section-cards-pokemon")
    sectionCard.innerHTML += `
        <div class="card-pokemon">
            <div class="informations-pokemon">
                <h3 class="name-pokemon">Bulbasaur</h3>
                <span># 1</span>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" class="image-pokemon">
            <div class="type-pokemon">
                <span>Grass</span>
                <span>Overgrow</span>
            </div>
        </div>
    `
    return sectionCard
}



