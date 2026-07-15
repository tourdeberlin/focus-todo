import useTasks from "../../hooks/useTasks";
import { useState } from "react";
import Timer from "./Timer";

const FocusPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const { tasks } = useTasks();

  return (
    <div className="flex flex-col w-full items-center px-4 py-8">
      <h2 className="text-2xl pb-6 text-left">Фокус-сессия</h2>
      <label className="flex flex-col text-neutral-500">
        Выберите задачу
        {tasks.length > 0 && (
          <select
            value={selectedTask}
            onChange={(e) => setSelectedTask(e.target.value)}
          >
            {tasks.map((task) => (
              <option value={task.title}>{task.title}</option>
            ))}
          </select>
        )}
      </label>
      <Timer />
    </div>
  );
};

export default FocusPage;
