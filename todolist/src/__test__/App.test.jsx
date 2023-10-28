/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";
import { mockUserResponse } from "../mock/mockUser";
import { tasks } from "../mock/mockTasks";

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

  it("Test SignUp", async () => {
    const response = {
      json: vi.fn().mockResolvedValue(mockUserResponse),
    };

    // global (servidor) = window (cliente)
    global.fetch = vi.fn().mockResolvedValue(response);

    render(<App />);

    const inputName = screen.getByLabelText("name");
    const inputLastname = screen.getByLabelText("lastname");
    const inputEmail = screen.getByLabelText("email");
    const inputPassword = screen.getByLabelText("password");

    // escribir en los inputs
    fireEvent.change(inputName, { target: { value: "Pepe" } });
    fireEvent.change(inputLastname, { target: { value: "Perez" } });
    fireEvent.change(inputEmail, { target: { value: "pepe@gmail.com" } });
    fireEvent.change(inputPassword, { target: { value: "pepe12345" } });

    const button = screen.getByLabelText("Crear cuenta");
    fireEvent.click(button);

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(tasks),
    });

    await waitFor(() => expect(window.location.pathname).toBe("/"));

    const homeTitle = screen.getByText("Crear tu tarea");
    expect(homeTitle).toBeInTheDocument();
  });
});
