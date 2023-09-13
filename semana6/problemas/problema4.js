/**
Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
Hecho esto, imprime los números primos entre 1 y 100. 
*/

function isPrime(number) {
  if (number === 1) return "no es primo";

  let cont = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) cont++;
  }

  return cont === 2 ? "es primo" : "no es primo";
}

for (let i = 1; i <= 100; i++) {
  console.log(i, isPrime(i));
}
