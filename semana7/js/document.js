// Vamos a cambiar el color del body

// Paso1 Como podemos obtener un elemento desde JS

// Antigua
const cuerpoDeLaWeb = document.getElementsByTagName("body");
console.log("getElementsByTagName", cuerpoDeLaWeb[0]);

// Moderna
const body = document.querySelector("body");
// body.style.backgroundColor = "#eee";
// body.style.fontSize = "20px";

body.style.cssText = `
  background-color: #eee;
  font-size: 20px;
`;

const secondaryTitles = document.getElementsByTagName("h2");

for (const item of secondaryTitles) {
  console.log(item);
}

console.log("-------");

const secondaryTitles2 = document.querySelectorAll("h2");
secondaryTitles2.forEach((item) => {
  console.log(item);
});

// Obtener elemento por ID
// antigua
const title = document.getElementById("title");
// moderna
const title2 = document.querySelector("#title");

// Obtener elemento por class
// antigua
const imageAvengers = document.getElementsByClassName("img-avengers");
console.log(imageAvengers);
// moderan
const imageAvengers2 = document.querySelector(".img-avengers");

// button
const btnChangeWeb = document.querySelector("#btn-change-web");

btnChangeWeb.onclick = function () {
  imageAvengers2.src =
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg";

  imageAvengers2.style.cssText = "width: 200px;";

  title2.textContent = "Avengers End Game";
};
