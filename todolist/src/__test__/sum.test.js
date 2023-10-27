import { describe, it, expect } from "vitest";

function sumar(n1, n2) {
  return n1 + n2;
}

function dividir(n1, n2) {
  if (n2 === 0) return "no se puede dividir";
  return n1 / n2;
}

describe("para probar operaciones matematicas", () => {
  it("sumar numeros", () => {
    expect(sumar(4, 5)).toBe(9);
    expect(sumar(4, 10)).toBe(14);
    expect(sumar(4, 11)).toBe(15);
  });

  it("dividir numeros", () => {
    // casos par probar que funcione
    expect(dividir(20, 0)).toBe("no se puede dividir");
    expect(dividir(10, 2)).toBe(5);
  });
});
