export function historyReducer(history, action) {
  switch (action.type) {
    case "SESSION_ADD": {
      return [...history, { ...action.session, task: action.task }];
    }
  }
}
