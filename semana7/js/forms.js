const form = document.querySelector("#form-register");

/**
 * Los formularios tiene un evento especial y unico
 * onsubmit tiene un parametro llamando event
 */

form.onsubmit = function (event) {
  // Existe una funcion que nos permite evitar que el navegador
  // se recargue cuando es un formulario
  event.preventDefault();

  const inputs = document.querySelectorAll("input");

  const values = {};

  for (const input of inputs) {
    values[input.name] = input.value;
  }

  // vamos a guardar los valores del objeto en un array y verificar si alguno esta vacio
  const inputValues = Object.values(values);

  const validacion = inputValues.find((value) => !value);
  
  console.log(typeof validacion);
  
  if (typeof validacion === "string") {
    alert("Completo todos los campos");
    return;
  }
};
