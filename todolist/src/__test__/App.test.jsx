import { render } from "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Render App component", () => {
  it("Test App flow", () => {
    // llamando y ejecutando al componente
    render(<App />);
  });
});
