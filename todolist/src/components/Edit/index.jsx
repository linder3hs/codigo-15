/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import { Button, Select, TextField } from "../../components";
import { update } from "../../services";
import Swal from "sweetalert2";

const categories = ["Hogar", "Trabajo", "Estudio", "Ocio"];
const priorities = ["Baja", "Media", "Alto", "Urgente"];

export default function Edit({ task, getTasks }) {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState(task.text);
  const [category, setCategory] = useState(task.category ?? categories[0]);
  const [priority, setPriority] = useState(task.priority ?? priorities[0]);

  const handleChange = (e) => setText(e.target.value);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const body = {
      text,
      category,
      priority,
    };
    await update(task.id, body, "tasks");
    // alerta
    Swal.fire({
      title: "Success",
      icon: "success",
      text: "Se actualizao correctamente",
    });
    // cerrar el modal
    setOpen(false);
    // refrescar las tareas
    await getTasks();
  };

  return (
    <>
      <PencilIcon
        className="h-6 w-6 text-blue-500 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="bg-white mx-auto w-full md:max-w-md rounded p-4">
            <Dialog.Title>Editar tarea: {task.text}</Dialog.Title>
            <form className="my-5" onSubmit={handleEditSubmit}>
              <TextField
                value={text}
                onChange={handleChange}
                placeholder="Editar tarea"
                className="rounded-r"
              />
              <div className="mt-5">
                <Select
                  value={category}
                  onChange={setCategory}
                  items={categories}
                />
              </div>
              <div className="mt-5">
                <Select
                  value={priority}
                  onChange={setPriority}
                  items={priorities}
                />
              </div>
              <div className="mt-5">
                <Button
                  type="submit"
                  text="Actualizar"
                  className="rounded-l w-full text-lg font-semibold"
                />
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
