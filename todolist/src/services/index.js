// Funciones para nuestro CRUD
const URLApi = "https://65273bec917d673fd76d82a2.mockapi.io/tasks";

export async function create(body) {
  const response = await fetch(URLApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}
