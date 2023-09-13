const personas = ["Pablo", "Juan", "Pedro", "Maria", "Lucia"];

console.log(personas[3]);

// push: Agregar un elemento al final de la lista
personas.push("Alejandro");

// length: Para contar la cantidad de elementos
console.log(personas.length);
console.log(personas);

// pop: Eliminar el ultimo elemento del array y retornar el elemento eliminado
const eliminado = personas.pop();
console.log("Personas despues del POP", personas, eliminado);

// unshift: Agrega un elemento al inicio
personas.unshift("Primer elemento");
console.log("Personas unshift", personas);
// shift:
personas.shift();
console.log("Personas shift", personas);

// FOR
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const producto = 5;
const resultado = [];
const resultado2 = [];

for (let i = 0; i < numeros.length; i++) {
  const operacion = numeros[i] * producto;
  resultado.push(operacion);
}

console.log("Calculadora", resultado);

for (const numero of numeros) {
  resultado2.push(numero * producto);
}

console.log("For of", resultado2);
