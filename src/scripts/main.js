
const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`;
fetch(url)
.then((response) => response.json())
.then((bodyResponse) => bodyResponse.results.map((item) => {
    fetch(item.url)
    .then((response) => response.json())
    .then((teste) => {
        let num = 0
        const x = teste.types
        console.log(x[num].type.name)

        const createCardPokemon = () => {
            const sectionCard = document.querySelector(".section-cards-pokemon")
            sectionCard.innerHTML += `
                <div class="card-pokemon">
                    <div class="informations-pokemon">
                    <h3 class="name-pokemon">${item.name}</h3>
                    <span># ${teste.id}</span>
                    </div>
                    <img src="${teste.sprites.front_default}" alt="${item.name}" class="image-pokemon">
                    <div class="type-pokemon">
                        <span>${x[num].type.name}</span>
                        <span></span>
                    </div>
                </div>
            `
            num++
            return sectionCard
        }
        createCardPokemon()
    })
    
    

}) )
.catch((error) => console.error(error))





