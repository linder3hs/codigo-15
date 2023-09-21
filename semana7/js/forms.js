const form = document.querySelector("#form-register");
const button = document.querySelector("button");

function setStyleToButton(validate) {
  if (validate) {
    // activar boton
    button.classList.remove("bg-purple-800/50", "cursor-no-drop");
    button.classList.add("bg-purple-800", "cursor-pointer");
    button.removeAttribute("disabled");
  } else {
    // deshabilitar boton
    button.classList.remove("bg-purple-800", "cursor-pointer");
    button.classList.add("bg-purple-800/50", "cursor-no-drop");
    button.setAttribute("disabled", true);
  }
}

function verifyIfAllInputsAreNotEmpty() {
  // traer todos los inputs
  const inputs = document.querySelectorAll("input");

  const validate =
    Array.from(inputs)
      .map((input) => input.value)
      .filter((value) => value).length === 4;

  setStyleToButton(validate);
}

function verifyIfEmptyInput(element) {
  verifyIfAllInputsAreNotEmpty();

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

  // Validar que el password y el verify password sean iguales
  if (values.password !== values["verify-password"]) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El password no coincide",
    });
    return;
  }

  // Si son iguales muestro una alerta que dica que se guardo al usuario correctamente
  Swal.fire({
    icon: "success",
    title: "Existoso!",
    text: "Se registro correctamente",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Cerrar alerta",
  });
};
