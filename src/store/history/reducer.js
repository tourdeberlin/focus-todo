export function historyReducer(history, action) {
  switch (action.type) {
    case "SESSION_ADD": {
      return [
        ...history,
        {
          task: action.task,
          duration: action.duration,
          startedAt: action.startedAt,
          finishedAt: action.finishedAt,
        },
      ];
    }
    default: {
      throw new Error("Uknown action" + action.type);
    }
  }
}
