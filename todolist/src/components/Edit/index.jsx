import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";

export default function Edit() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PencilIcon
        className="h-6 w-6 text-blue-500"
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Panel>Editar informacion</Dialog.Panel>
      </Dialog>
    </>
  );
}
