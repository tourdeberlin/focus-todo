import Task from "./Task";

const TasksList = ({ tasks, onToggle, onDelete, onEdit, onSelect }) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default TasksList;
