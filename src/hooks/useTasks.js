import { useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function useTasks() {
  const { tasks, tasksDispatch } = useContext(AppContext);
  return {
    tasks,
    tasksDispatch,
  };
}
