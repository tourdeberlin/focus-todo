import { useEffect, useReducer, useState } from "react";
import { AppContext } from "./AppContext";
import { tasksReducer } from "./tasks/reducer";
import { historyReducer } from "./history/reducer";
import { settingsReducer, initialSettigs } from "./settings/reducer";
import { timerReducer } from "./timer/reducer";

function loadFromStorage(key, defaultValue) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function AppProvider({ children }) {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [], () =>
    loadFromStorage("tasks", []),
  );
  const [history, historyDispatch] = useReducer(historyReducer, [], () =>
    loadFromStorage("history", []),
  );
  const [settings, settingsDispatch] = useReducer(
    settingsReducer,
    initialSettigs,
    (init) => loadFromStorage("settings", init),
  );
  const [currentTaskId, setCurrentTaskId] = useState(() =>
    loadFromStorage("currentTaskId", ""),
  );

  const initialTimer = {
    mode: "focus",
    status: "idle",
    currentTaskId,
    timeLeft: settings.focusDuration * 60,
    completedFocusSessions: 0,
  };
  
  const [timer, timerDispatch] = useReducer(timerReducer, initialTimer);

  useEffect(() => {
    saveToStorage("tasks", tasks);
    saveToStorage("history", history);
    saveToStorage("currentTaskId", currentTaskId);
    saveToStorage("settings", settings);
  }, [tasks, history, currentTaskId, settings]);

  return (
    <AppContext
      value={{
        tasks,
        tasksDispatch,
        currentTaskId,
        setCurrentTaskId,
        history,
        historyDispatch,
        settings,
        settingsDispatch,
        timer,
        timerDispatch,
      }}
    >
      {children}
    </AppContext>
  );
}
