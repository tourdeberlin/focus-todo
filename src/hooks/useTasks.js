import { useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function useTasks() {
  const { tasks, tasksDispatch, currentTaskId, setCurrentTaskId } =
    useContext(AppContext);
  return {
    tasks,
    tasksDispatch,
    currentTaskId,
    setCurrentTaskId,
  };
}
