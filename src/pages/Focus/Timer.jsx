import { useState, useRef } from "react";
import Button from "../../components/ui/Button";
import { RotateCcw, Play, Pause } from "lucide-react";

const initialTime = 25 * 60;

const Timer = () => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      timerRef.current = setInterval(() => setTime((prev) => prev - 1), 1000);
    }
  };

  const handleRestart = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(initialTime);
  };

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60));
    const remainingSec = String(seconds % 60);
    return `${minutes.padStart(2, 0)}:${remainingSec.padStart(2, 0)}`;
  };

  return (
    <div className="flex flex-col mt-8">
      <p className="text-8xl tracking-wider">{formatTime(time)}</p>
      <div className="flex gap-3 justify-center mt-5">
        <Button variant="colored" onClick={handleStartStop}>
          {isRunning ? (
            <span className="flex gap-2 items-center">
              <Pause className="h-4 w-4" /> Пауза
            </span>
          ) : (
            <span className="flex gap-2 items-center">
              <Play className="h-4 w-4" /> Старт
            </span>
          )}
        </Button>
        <Button variant="bordered" onClick={handleRestart}>
          <RotateCcw />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
