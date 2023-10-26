/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

const mockResponse = {
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/559.jpg",
  createdAt: "2023-10-25T22:50:32.142Z",
  email: "linder@gmail.com",
  id: "4",
  lastname: "Hassinger",
  name: "Linder ",
  password: "1212122",
};

describe("App componente", () => {
  it("should render App component", () => {
    render(<App />);

    const title = screen.queryByText("Crear Cuenta");
    const inputName = screen.getByLabelText("name");
    // const inputLastname = screen.getByLabelText("lastname");
    // const inputEmail = screen.getByLabelText("email");
    // const inputPassword = screen.getByLabelText("password");
    const button = screen.getByLabelText("Crear cuenta");

    expect(title).toBeInTheDocument();

    fireEvent.change(inputName, {
      target: {
        value: "Linder",
      },
    });
    expect(inputName.value).toBe("Linder");

    fireEvent.click(button);

    const errors = screen.getAllByLabelText("Este campo es requerido");
    expect(errors).toHaveLength(3);
  });

  it("should render App with register", async () => {
    const response = {
      json: vi.fn().mockResolvedValue(mockResponse),
    };

    global.fetch = vi.fn().mockResolvedValue(response);

    render(<App />);

    const inputName = screen.getByLabelText("name");
    const inputLastname = screen.getByLabelText("lastname");
    const inputEmail = screen.getByLabelText("email");
    const inputPassword = screen.getByLabelText("password");
    const button = screen.getByLabelText("Crear cuenta");

    fireEvent.change(inputName, {
      target: {
        value: "Linder",
      },
    });

    fireEvent.change(inputLastname, {
      target: {
        value: "Hassinger",
      },
    });

    fireEvent.change(inputEmail, {
      target: {
        value: "linder@gmail.com",
      },
    });

    fireEvent.change(inputPassword, {
      target: {
        value: "linder12345",
      },
    });

    fireEvent.click(button);

    const response2 = {
      json: vi.fn().mockResolvedValue([mockResponse]),
    };

    global.fetch = vi.fn().mockResolvedValue(response2);

    // test go to home
    await waitFor(() => expect(window.location.href).toContain("/"));

    const title = screen.queryByText("Crear tu tarea");
    expect(title).toBeInTheDocument();
  });
});
