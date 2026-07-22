import Button from "../../components/ui/Button";
import { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TasksList from "./TasksList";
import EditTaskModal from "./EditTaskModal";
import useTasks from "../../hooks/useTasks";
import EmptyState from "../../components/ui/EmptyState";

const FILTERS = {
  all: "all",
  active: "active",
  completed: "completed",
};

const TasksPage = () => {
  const { tasks, tasksDispatch, setCurrentTaskId } = useTasks();
  const [inputValue, setInputValue] = useState("");
  const [edidtingTaskId, setEditingTaskId] = useState(null);
  const [filter, setFilter] = useState(FILTERS.all);

  const filteredTasks = tasks.filter((task) => {
    if (filter === FILTERS.completed) {
      return task.completed;
    } else if (filter === FILTERS.active) {
      return !task.completed;
    } else if (filter === FILTERS.all) {
      return task;
    }
  });

  const editingTask = tasks.find((task) => task.id === edidtingTaskId);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    tasksDispatch({
      type: "TASK_ADD",
      id: crypto.randomUUID(),
      title: inputValue,
      description: "",
      completed: false,
    });

    setInputValue("");
  };

  const toggleTask = (taskId) => {
    tasksDispatch({
      type: "TASK_TOGGLE",
      id: taskId,
    });
  };

  const handleDeleteTask = (taskId) => {
    tasksDispatch({
      type: "TASK_DELETE",
      id: taskId,
    });
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleSave = (updatedTask) => {
    tasksDispatch({
      type: "TASK_EDIT",
      ...updatedTask,
    });
    setEditingTaskId(null);
  };

  const handleSelectTask = (taskId) => {
    setCurrentTaskId(taskId);
  };

  return (
    <div className="flex flex-col w-full self-start px-4 py-8">
      <h2 className="text-2xl pb-6 text-left">Задачи</h2>
      <NewTaskForm
        onSubmit={handleAddTask}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="flex gap-2 self-start pb-6">
        <Button
          variant={filter === FILTERS.all ? "colored" : "bordered"}
          onClick={() => setFilter("all")}
        >
          Все
        </Button>
        <Button
          variant={filter === FILTERS.active ? "colored" : "bordered"}
          onClick={() => setFilter("active")}
        >
          Активные
        </Button>
        <Button
          variant={filter === FILTERS.completed ? "colored" : "bordered"}
          onClick={() => setFilter("completed")}
        >
          Выполненные
        </Button>
      </div>

      {tasks.length === 0 ? (
        <EmptyState title="Нет задач" />
      ) : (
        <TasksList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
          onSelect={handleSelectTask}
        />
      )}
      {editingTask && (
        <EditTaskModal
          key={editingTask.id}
          task={editingTask}
          onClose={() => setEditingTaskId(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default TasksPage;
