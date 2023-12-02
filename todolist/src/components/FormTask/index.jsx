/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";
import { create } from "../../services";
import { Button, TextField } from "../../components";
import { useSelector } from "react-redux";
import { selectorUserId } from "../../selectors/userSelector";
import { showError } from "../../utils";

export default function FormTask({ getTasks }) {
  const [textTask, setTextTask] = useState("");

  const userId = useSelector(selectorUserId);

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

    const currentDate = new Date();
    const addFiveDays = currentDate.setDate(currentDate.getDate() + 5);
    const formatYMD = new Date(addFiveDays).toISOString().slice(0, 10);

    const { ok, data } = await create(
      {
        title: textTask,
        status: "created",
        category: null,
        priority: null,
        user_id: userId,
        due_date: formatYMD,
        is_done: false,
      },
      "tasks"
    );

    if (!ok) {
      showError(data);
      return
    }

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
