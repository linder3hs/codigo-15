import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// se va a ejecutar despues de cada test
afterEach(() => {
  cleanup();
});
