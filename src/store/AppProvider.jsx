import { useEffect, useReducer } from "react";
import { tasksReducer } from "./tasks/reducer";
import { AppContext } from "./AppContext";

function loadTasks() {
  const saved = localStorage.getItem("tasks");

  return saved ? JSON.parse(saved) : [];
}

export function AppProvider({ children }) {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [], loadTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return <AppContext value={{ tasks, tasksDispatch }}>{children}</AppContext>;
}
