const form = document.querySelector("#form-register");

function verifyIfEmptyInput(element) {
  const ifPAfterInput = document.querySelector(`#${element.name}`);

  if (element.value.length > 0) {
    element.classList.remove("border", "border-red-500");
    if (ifPAfterInput) ifPAfterInput.remove();
  } else {
    if (element.dataset.validation === "false") return;

    element.classList.add("border", "border-red-500");

    if (!ifPAfterInput) {
      const p = document.createElement("p"); // <p></p>
      p.textContent = "Completa este campo"; // <p>Completa este campo</p>
      p.setAttribute("id", element.name); // <p id="full-name">Completa este campo</p>
      p.classList.add("mt-1", "text-xs", "text-red-500");
      element.after(p);
    }
  }
}

form.onsubmit = function (event) {
  // Existe una funcion que nos permite evitar que el navegador
  // se recargue cuando es un formulario
  event.preventDefault();

  const inputs = document.querySelectorAll("input");
  const values = {};

  for (const input of inputs) {
    values[input.name] = input.value;
    verifyIfEmptyInput(input);
  }

  // vamos a guardar los valores del objeto en un array y verificar si alguno esta vacio
  const inputValues = Object.values(values);

  const validacion = inputValues.find((value) => !value);

  if (typeof validacion === "string") {
    alert("Completo todos los campos");
    return;
  }
};
