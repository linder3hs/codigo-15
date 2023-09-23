const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/";
const urlMoviesByGenre =
  "https://moviesminidatabase.p.rapidapi.com/movie/byGen/";

const options = {
  headers: {
    "X-RapidAPI-Key": "4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc",
    "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
  },
};

function renderItemList(genre) {
  return `
    <p class="my-2 hover:text-blue-800 hover:font-semibold">
      <a href="?genre=${genre}" class="cursor-pointer">${genre}</a>
    </p>
  `;
}

export async function getGenres(element) {
  const response = await fetch(urlGenres, options);
  const data = await response.json();

  data.results.forEach((item) => {
    element.innerHTML += renderItemList(item.genre);
  });
}

async function renderMovie(movie) {
  return `
    <div>
      <img class="w-[200px]" src="" />
      <h2 class="font-semibold text-xl mt-2">${movie.title}</h2>
      <p></p>
    </div>
  `;
}

export async function getGenreByURL() {
  const genre = location.search.split("=")[1];

  // caso1: si hay un error
  if (!genre) return;

  // caso2: cuando no hay error (hacemos la busqueda)
  // https://moviesminidatabase.p.rapidapi.com/movie/byGen/genre
  const response = await fetch(`${urlMoviesByGenre}${genre}`, options);
  const data = await response.json();

  const containerMovies = document.querySelector("#grid-movies");

  data.results.forEach(async (movie) => {
    // insertar la informacion en el HTML
    const movieData = await renderMovie(movie);
    containerMovies.innerHTML += movieData;
  });
}
