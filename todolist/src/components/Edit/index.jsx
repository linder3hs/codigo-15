/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";

export default function Edit({ task }) {
  const [open, setOpen] = useState(false);

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
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <Dialog.Panel className="bg-white mx-auto max-w-sm rounded p-4">
            <Dialog.Title>Editar tarea: {task.text}</Dialog.Title>
            <div>
              <input type="text" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
