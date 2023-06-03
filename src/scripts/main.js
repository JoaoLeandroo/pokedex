const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`;

const createCardPokemon = (item, teste) => {
  let num = 0;
  const x = teste.types;

  const sectionCard = document.querySelector(".section-cards-pokemon");
  sectionCard.innerHTML += `
    <div class="card-pokemon">
        <div class="informations-pokemon">
        <h3 class="name-pokemon">${item.name}</h3>
        <span># ${teste.id}</span>
        </div>
        <img src="${teste.sprites.front_default}" alt="${item.name}" class="image-pokemon">
        <div class="type-pokemon">
            <span>type - ${x[num].type.name}</span>
        </div>
    </div>
  `;
  num++;
  return sectionCard;
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const bodyResponse = await response.json();

    for (const item of bodyResponse.results) {
      const pokemonResponse = await fetch(item.url);
      const teste = await pokemonResponse.json();
      createCardPokemon(item, teste);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchData(url);

