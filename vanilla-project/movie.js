const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/";

export async function getGenres(element) {
  const response = await fetch(urlGenres, {
    headers: {
      "X-RapidAPI-Key": "4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc",
      "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
    },
  });

  const data = await response.json();

  data.results.forEach((item) => {
    element.innerHTML += `<p class="my-2 hover:text-blue-800 hover:font-semibold"><a class="cursor-pointer">${item.genre}</a></p>`;
  });
}
