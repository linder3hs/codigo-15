const form = document.querySelector("#form");
const input = document.querySelector("#input-pokemon");
const imgPokemon = document.querySelector("#pokemon-img");
const namePokemon = document.querySelector("#pokemon-name");

form.onsubmit = async function (event) {
  event.preventDefault();

  const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;

  // hacer la peticion
  const response = await fetch(url);
  const pokemon = await response.json();
  namePokemon.textContent = pokemon.name;
  imgPokemon.src = pokemon.sprites.other["official-artwork"].front_default;

  console.log(pokemon.abilities);
};
