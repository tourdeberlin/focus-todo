import { useRef, useEffect } from "react";
import TimerControls from "./TimerControls";
import useHistory from "../../hooks/useHistory";
import useTasks from "../../hooks/useTasks";
import useTimer from "../../hooks/useTimer";
import useSettings from "../../hooks/useSettings";

const formatTime = (seconds) => {
  const minutes = String(Math.floor(seconds / 60));
  const remainingSec = String(seconds % 60);
  return `${minutes.padStart(2, 0)}:${remainingSec.padStart(2, 0)}`;
};

function getDuration(mode, settings) {
  if (mode === "focus") return settings.focusDuration * 60;
  if (mode === "shortBreak") return settings.shortBreakDuration * 60;
  if (mode === "longBreak") return settings.longBreakDuration * 60;
}

function getSessionTime(duration) {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes() - duration / 60).padStart(2, 0);
  return `${hours}:${minutes}`;
}

const Timer = ({ disabled }) => {
  const { timer, timerDispatch } = useTimer();
  const { settings } = useSettings();
  const { historyDispatch } = useHistory();
  const { tasks } = useTasks();
  const { currentTaskId } = useTasks();
  const timerRef = useRef(null);

  const currentTask = tasks.find((task) => task.id === currentTaskId);

  useEffect(() => {
    if (timer.timeLeft > 0) return;

    clearInterval(timerRef.current);
    if (timer.mode === "focus") {
      historyDispatch({
        type: "SESSION_ADD",
        task: currentTask,
        duration: `${getDuration(timer.mode, settings) / 60} мин`,
        startedAt: getSessionTime(getDuration(timer.mode, settings)),
        finishedAt: Date.now(),
      });
    }
    timerDispatch({ type: "NEXT_PHASE", settings });
  }, [timer, timerDispatch, currentTask, settings]);

  useEffect(() => {
    if (timer.status !== "running") {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      timerDispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timer.status]);

  const handleStartStop = () => {
    if (disabled) return;

    timerDispatch({ type: "START_STOP" });
  };

  const handleRestart = () => {
    clearInterval(timerRef.current);
    timerDispatch({
      type: "RESTART",
      duration: getDuration(timer.mode, settings),
    });
  };

  return (
    <div className="flex flex-col mt-8">
      <p className="text-8xl tracking-wider">{formatTime(timer.timeLeft)}</p>
      <TimerControls
        isRunning={timer.status === "running"}
        handleStartStop={handleStartStop}
        handleRestart={handleRestart}
      />
      {disabled && <p className="text-red-800 text-xl">Выберите задачу</p>}
    </div>
  );
};

export default Timer;
