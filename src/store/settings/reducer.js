export const initialSettigs = {
  focusDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  sessionsBeforeLongBreak: 4,

  autoBreakStart: false,
  autoFocusStart: false,
};

export function settingsReducer(settings, action) {
    switch (action.type) {
    case "SET_SETTING": {
      return {
        ...settings,
        [action.key]: action.value,
      };
    }
    default: {
      throw new Error("Uknown action" + action.type);
    }
  }
}
