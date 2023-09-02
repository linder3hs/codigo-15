// Crear una variable que guarda al elemento destination
const destination = document.querySelector("#destination");
const main = document.querySelector("#main");

// variable que permita almacenar los fondos
//
let bgMobile = 'bg-[url("./assets/home/background-home-mobile.jpg")]';
let bgDesktop = 'md:bg-[url("./assets/home/background-home-desktop.jpg")]';

main.classList.add(bgMobile);
main.classList.add(bgDesktop);

// De imprimir un dato en la consola del navegador
destination.onclick = function () {
  bgDesktop =
    'md:bg-[url("./assets/destination/background-destination-desktop.jpg")]';
  main.classList.add(bgDesktop);
};
