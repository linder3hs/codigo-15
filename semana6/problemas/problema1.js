/*
Escribe un programa que muestre por consola (con un console) los
números de 1 a 100 (ambos incluidos y con un salto de línea entre
cada impresión), sustituyendo los siguientes:
- Múltiplos de 3 por la palabra "fizz".
- Múltiplos de 5 por la palabra "buzz".
- Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/

// ternario
// condicion ? "true" : condicion2 ? "true" : "false";

function validateFizzBuzz(numero) {
  const m3 = numero % 3 === 0;
  const m5 = numero % 5 === 0;
  const m15 = numero % 15 === 0;

  const respuesta = m15 ? "fizzbuuzz" : m3 ? "fizz" : m5 ? "buzz" : numero;
  return respuesta;
}

for (let i = 1; i <= 100; i++) {
  console.log(validateFizzBuzz(i));
}
