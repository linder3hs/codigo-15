const baseUrl = "https://65273bec917d673fd76d82a2.mockapi.io/";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
  const finalUrl = id ? `${url}/${id}` : url;
  const headers = {
    "Content-Type": "application/json",
  };

  if (body) headers.body = JSON.stringify(body);

  const response = await fetch(`${baseUrl}${finalUrl}`, {
    method,
    headers,
  });

  const data = await response.json();

  return data;
}
