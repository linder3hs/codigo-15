/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";
import { create } from "../../services";
import { Button, TextField } from "../../components";

export default function FormTask({ getTasks }) {
  const [textTask, setTextTask] = useState("");

  const handleInputChange = (e) => setTextTask(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!textTask) {
      Swal.fire({
        title: "Error",
        text: "Completa el campo",
        icon: "error",
      });

      return;
    }

    // llamo a la funcion create
    await create(
      {
        text: textTask,
        status: "created",
        category: null,
        priority: null,
      },
      "tasks"
    );

    setTextTask("");

    Swal.fire({
      title: "Success",
      text: "Se creo la tarea correctamente",
      icon: "success",
    });

    await getTasks();
  };

  return (
    <>
      <h2 className="font-semibold text-xl mt-3">Crear tu tarea</h2>
      <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>
        <TextField value={textTask} onChange={handleInputChange} />
        <Button type="submit" text="Crear" variant="secondary" />
      </form>
    </>
  );
}
