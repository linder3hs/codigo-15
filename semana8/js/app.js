const form = document.querySelector("#form");
const input = document.querySelector("#input-pokemon");
const imgPokemon = document.querySelector("#pokemon-img");
const namePokemon = document.querySelector("#pokemon-name");
const pokemonAbilities = document.querySelector("#pokemon-abilities");
const stats = document.querySelector("#stats");

new Chart(stats, {
  type: "bar",
  data: {
    labels: [
      "Attack",
      "HP",
      "defense",
      "special-attack",
      "special-defense",
      "speed",
    ],
    datasets: [
      {
        label: "Pokemon data",
        data: [40, 50, 20, 10, 30, 80],
      },
    ],
  },
});

function renderItemList(name) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const span = document.createElement("span");
  li.classList.add("flex", "gap-2", "items-center");
  img.src = "./assets/icons/check.svg";
  img.width = 20;
  span.textContent = name;

  li.appendChild(img);
  li.appendChild(span);

  return li;
}

form.onsubmit = async function (event) {
  event.preventDefault();

  const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;

  const response = await fetch(url);
  const pokemon = await response.json();
  namePokemon.textContent = pokemon.name;
  imgPokemon.src = pokemon.sprites.other["official-artwork"].front_default;

  pokemonAbilities.innerHTML = "";

  pokemon.abilities.forEach((item) => {
    pokemonAbilities.appendChild(renderItemList(item.ability.name));
  });
};
