import { useRef, useEffect } from "react";
import TimerControls from "./TimerControls";
import useHistory from "../../hooks/useHistory";
import useTasks from "../../hooks/useTasks";
import useTimer from "../../hooks/useTimer";

const formatTime = (seconds) => {
  const minutes = String(Math.floor(seconds / 60));
  const remainingSec = String(seconds % 60);
  return `${minutes.padStart(2, 0)}:${remainingSec.padStart(2, 0)}`;
};

const Timer = ({ disabled }) => {
  const { timer, timerDispatch } = useTimer();

  const { history, historyDispatch } = useHistory();
  const { currentTaskId } = useTasks();
  const timerRef = useRef(null);

  const currentTask = history.find((task) => task.id === currentTaskId);

  useEffect(() => {
    if (timer.timeLeft !== 0) return;

    clearInterval(timerRef.current);

    // historyDispatch({
    //   type: "SESSION_ADD",
    //   session: history,
    //   task: currentTask.title,
    //   time: Date.now(),
    //   duration: timer.timeLeft,
    // });
  }, [timer, currentTask, timerDispatch]);

  useEffect(() => {
    if (timer.status !== "running") return;

    timerRef.current = setInterval(() => {
      timerDispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timer.status, timerDispatch]);

  const handleStartStop = () => {
    if (disabled) return;

    timerDispatch({ type: "START_STOP" });
  };

  const handleRestart = () => {
    clearInterval(timerRef.current);
    timerDispatch({ type: "RESET" });
    // setTime(initialTime);
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
