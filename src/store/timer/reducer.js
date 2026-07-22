export const initialTimer = {
  mode: "focus",
  status: "idle",
  currentTaskId: null,
  timeLeft: 0.5 * 60,
};

export function timerReducer(timer, action) {
  switch (action.type) {
    case "START_STOP": {
      if (timer.status === "idle" || timer.status === "paused") {
        return {
          ...timer,
          status: "running",
        };
      } else if (timer.status === "running") {
        return {
          ...timer,
          status: "paused",
        };
      }
      break;
    }
    case "RESET": {
      return {
        ...timer,
        status: "idle",
      };
    }
    case "TICK": {
      if (timer.timeLeft <= 1) {
        return {
          ...timer,
          timeLeft: 0,
          status: "paused",
        };
      }

      return {
        ...timer,
        timeLeft: timer.timeLeft - 1,
      };
    }
    case 'CHANGE_MODE': {
      return {
        ...timer,
        mode: action.mode
      }
    }
  }
}
