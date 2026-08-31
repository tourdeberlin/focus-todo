import Button from "../../components/ui/Button";
import { Pause, Play, RotateCcw } from "lucide-react";

const TimerControls = ({ isRunning, handleStartStop, handleRestart }) => {
  return (
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
  );
};

export default TimerControls;
