/* eslint-disable react/prop-types */
import { Card, Delete, Edit } from "../../components";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Task({ task, getTasks }) {
  return (
    <Card className="mt-5 flex justify-between">
      <p>{task.title}</p>
      <div className="flex gap-3">
        <CheckCircleIcon className="h-6 w-6 text-green-500" />
        <Edit task={task} getTasks={getTasks} />
        <Delete task={task} getTasks={getTasks} />
      </div>
    </Card>
  );
}
