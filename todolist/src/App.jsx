import { Card } from "./components";
import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function App() {
  return (
    <div className="mt-10">
      <Card>
        <h2 className="font-semibold text-xl mt-3">Crear tu tarea</h2>
        <div className="my-5 flex items-center">
          <input
            type="text"
            className="border w-full px-2 py-3 rounded-l outline-none"
            placeholder="Escribe tu tarea"
          />
          <button className="bg-green-400 px-2 py-3 rounded-r text-white border border-green-400">
            Crear
          </button>
        </div>
      </Card>
      <Card className="mt-5 flex justify-between">
        <p>Tarea 1</p>
        <div className="flex gap-3">
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
          <PencilIcon className="h-6 w-6 text-blue-500" />
          <TrashIcon className="h-6 w-6 text-red-500" />
        </div>
      </Card>
    </div>
  );
}
