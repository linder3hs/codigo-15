import { Card, FormTask, Task } from "./components";

export default function App() {
  return (
    <div className="mt-10">
      <Card>
        <FormTask />
      </Card>
      <Task text="Pagar los servicios" />
      <Task text="Comprar para la cena" />
      <Task text="Terminar mis tareas" />
    </div>
  );
}
