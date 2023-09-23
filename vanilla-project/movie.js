const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/";
const urlMoviesByGenre =
  "https://moviesminidatabase.p.rapidapi.com/movie/byGen/";

const urlMovieDetail = "https://moviesminidatabase.p.rapidapi.com/movie/id/";

const options = {
  headers: {
    "X-RapidAPI-Key": "933035ad5dmsh113f9ac961914cap159e1djsnf468265d512f",
    "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
  },
};

async function makeRequest(url) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const getTextGenreByURL = () => location.search.split("=")[1];

function renderItemList(genre) {
  const genreFromURL = getTextGenreByURL();

  let classToElement = "hover:text-blue-800 hover:font-semibold";

  if (genre === genreFromURL) {
    classToElement = "text-blue-800 font-semibold";
  }

  return `
    <p class="my-2 ${classToElement}">
      <a href="?genre=${genre}" class="cursor-pointer">${genre}</a>
    </p>
  `;
}

export async function getGenres(element) {
  const data = await makeRequest(urlGenres);
  data.results.forEach(
    ({ genre }) => (element.innerHTML += renderItemList(genre))
  );
}

async function renderMovie(movie) {
  const data = await makeRequest(`${urlMovieDetail}${movie.imdb_id}`);
  const movieData = data.results;

  return `
    <div>
      <img class="w-full md:w-[200px] h-[300px] object-cover" src="${movieData.banner}" />
      <h2 class="font-semibold text-xl mt-2">${movie.title}</h2>
      <p class="truncate">${movieData.plot}</p>
    </div>
  `;
}

export async function getGenreByURL() {
  const genre = getTextGenreByURL();

  if (!genre) return;

  const data = await makeRequest(`${urlMoviesByGenre}${genre}`);

  const containerMovies = document.querySelector("#grid-movies");

  data.results.slice(0, 6).forEach(async (movie) => {
    const movieData = await renderMovie(movie);
    containerMovies.innerHTML += movieData;
  });
}
