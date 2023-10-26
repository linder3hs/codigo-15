import { read } from "../services";
import Swal from "sweetalert2";

export async function findUser(field, value) {
  const users = await read("users");

  return users.find(
    (user) => user[field].toLowerCase() === value.toLowerCase()
  );
}

export function showError(text) {
  Swal.fire({
    icon: "error",
    text,
  });
}
