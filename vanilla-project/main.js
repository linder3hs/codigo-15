import "./style.css";
import { getGenres, getGenreByURL } from "./movie";

document.querySelector("#app").innerHTML = `
  <div class="p-6 lg:max-w-[60%] m-auto">
    <div>
      <h1 class="text-6xl font-bold text-blue-800">Películas</h1>
    </div>
    <hr class="mt-5" />
    <div class="flex flex-col md:flex-row gap-20 mt-3 md:mt-10">
      <div class="flex-1">
        <div>
          <h4 class="text-lg font-semibold">Filter Por:</h4>
        </div>
        <div id="container-genres" class="flex md:block overflow-auto gap-3 whitespace-nowrap">
        </div>
      </div>
      <div>
        <div id="grid-movies" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
         
        </div>
      </div>
    </div>
  </div>
`;

getGenres(document.querySelector("#container-genres"));
getGenreByURL();
