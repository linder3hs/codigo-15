import { makeHttpRequest } from "./config";

export async function create(body, url) {
  return await makeHttpRequest({ url, body, method: "POST" });
}

export async function read(url) {
  return await makeHttpRequest({ url });
}

export async function update(id, body, url) {
  return await makeHttpRequest({ body, id, method: "PUT", url });
}

export async function destroy(id, url) {
  return await makeHttpRequest({ id, url, method: "DELETE" });
}
