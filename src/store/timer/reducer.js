function getNextPhase(timer, settings) {
  if (timer.mode === "focus") {
    const completed = timer.completedFocusSessions + 1;
    const mode =
      completed % settings.sessionsBeforeLongBreak === 0
        ? "longBreak"
        : "shortBreak";
    const timeLeft =
      mode === "longBreak"
        ? settings.longBreakDuration * 60
        : settings.shortBreakDuration * 60;

    return {
      ...timer,
      completedFocusSessions: completed,
      mode,
      timeLeft,
      status: settings.autoBreakStart ? "running" : "idle",
    };
  } else if (timer.mode === "shortBreak") {
    return {
      ...timer,
      mode: "focus",
      timeLeft: settings.focusDuration * 60,
      status: settings.autoFocusStart ? "running" : "idle",
    };
  } else {
    return {
      ...timer,
      mode: "focus",
      timeLeft: settings.focusDuration * 60,
      status: settings.autoFocusStart ? "running" : "idle",
    };
  }
}

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
    case "RESTART": {
      return {
        ...timer,
        timeLeft: action.duration,
        status: 'idle'
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
    case "FINISH": {
      return {
        ...timer,
        status: "idle",
        timeLeft: 0,
      };
    }

    case "NEXT_PHASE": {
      const { settings } = action;
      const nextPhase = getNextPhase(timer, settings);
      return {
        ...timer,
        ...nextPhase,
      };
    }

    default: {
      throw new Error("Uknown action" + action.type);
    }
  }
}
