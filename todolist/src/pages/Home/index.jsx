import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorUserId } from "../../selectors/userSelector";
import { read } from "../../services";
import { Card, FormTask, Task } from "../../components";
import { showError } from "../../utils"

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const userId = useSelector(selectorUserId);

  const getTasks = async () => {
    const { data, ok } = await read(`tasks/${userId}`);

    if (!ok) {
      showError(data);
      return
    }

    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-10">
      <Card>
        <FormTask getTasks={getTasks} />
      </Card>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task key={task.id} task={task} getTasks={getTasks} />
        ))}
    </div>
  );
}
