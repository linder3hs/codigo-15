/* eslint-disable react/prop-types */
import { TrashIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { destroy } from "../../services";
import { showError } from "../../utils";

export default function Delete({ task, getTasks }) {
  const handleDelete = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "Esta seguro de eliminar esta tarea?",
      text: "Esta acción es irreversible",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    });

    if (!isConfirmed) return;

    const { data, ok } = await destroy(task.id, "tasks");

    if (!ok) {
      showError(data);
      return;
    }

    Swal.fire({
      text: data,
      icon: "success",
    });

    await getTasks();
  };

  return (
    <>
      <TrashIcon
        onClick={handleDelete}
        className="h-6 w-6 text-red-500 cursor-pointer"
      />
    </>
  );
}
