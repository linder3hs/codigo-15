// Funciones para nuestro CRUD
const baseUrl = "https://65273bec917d673fd76d82a2.mockapi.io/";

export async function create(body, url) {
  const response = await fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}

export async function read(url) {
  const response = await fetch(`${baseUrl}${url}`);
  const data = await response.json();
  return data;
}

export async function update(id, body, url) {
  const response = await fetch(`${baseUrl}${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

export async function destroy(id, url) {
  const response = await fetch(`${baseUrl}${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
