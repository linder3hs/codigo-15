/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { TextField } from "../../components";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const categories = ["Hogar", "Trabajo", "Estudio", "Ocio"];

export default function Edit({ task }) {
  const [open, setOpen] = useState(false);

  const [category, setCategory] = useState(categories[0]);

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
          <Dialog.Panel className="bg-white mx-auto w-full min-h-[500px] md:max-w-md rounded p-4">
            <Dialog.Title>Editar tarea: {task.text}</Dialog.Title>
            <div className="my-5">
              <TextField
                value={task.text}
                placeholder="Editar tarea"
                className="rounded-r"
              />
              <div className="mt-5">
                <Listbox value={category} onChange={setCategory}>
                  <Listbox.Button className="w-full flex items-center justify-between border px-3 shadow-md py-3 rounded text-left">
                    <span>{category}</span>
                    <span>
                      <ChevronUpDownIcon className="h-5 w-5" />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="w-full border mt-1 rounded">
                      {categories.map((item) => (
                        <Listbox.Option
                          key={item}
                          value={item}
                          className={`py-2 px-3 hover:bg-green-200 hover:text-green-800 cursor-pointer ${
                            item === category
                              ? "bg-green-200 text-green-800"
                              : "bg-white"
                          }`}
                        >
                          {item}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
