import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Render App component", () => {
  it("Test App flow", () => {
    // llamando y ejecutando al componente
    render(<App />); // estamos en sign up
    // recordermos que screen es igual a la pantalla actual
    const title = screen.getByText("Crear Cuenta");
    const button = screen.getByLabelText("Crear cuenta");
    // debemos esperar que title exista en el document
    expect(title).toBeInTheDocument();
    // estamos dando click al boton
    fireEvent.click(button);
    // debemos verificar que existar 4 mensajes de error
    // all = todos
    const errors = screen.getAllByText("Este campo es requerido");
    expect(errors).toHaveLength(4);
  });
});
