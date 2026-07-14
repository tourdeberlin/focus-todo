export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "TASK_ADD": {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          completed: action.completed,
        },
      ];
    }
    case "TASK_EDIT": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, title: action.title, description: action.description };
        } else {
          return task;
        }
      });
    }
    case "TASK_TOGGLE": {
      return tasks.map((task) =>
        task.id === action.id
          ? { ...task, completed: !task.completed }
          : task,
      );
    }
    case "TASK_DELETE": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw new Error("Uknown action" + action.type);
    }
  }
}