import clsx from "clsx";
import Button from "../../components/ui/Button";
import Checkbox from "../../components/ui/Checkbox";
import { X, FileText } from "lucide-react";
import useTasks from "../../hooks/useTasks";

const Task = ({ task, onToggle, onDelete, onEdit, onSelect }) => {
  const { currentTaskId } = useTasks();

  const isCurrent = task.id === currentTaskId;

  return (
    <div
      className={clsx(
        "flex justify-between border  rounded-lg  px-2 py-2 cursor-pointer",
        isCurrent ? " border-2 border-green-700" : "border-neutral-300",
      )}
      onClick={() => onSelect(task.id)}
    >
      <div className="flex gap-3 items-center">
        <Checkbox
          checked={task.completed}
          onChange={(e) => {
            e.stopPropagation();
            onToggle(task.id);
          }}
        />

        <div className="flex flex-col items-start gap-1">
          <p>{task.title}</p>
          {task.description && (
            <p className="text-neutral-500 text-sm">{task.description}</p>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="icon"
          aria-label="Редактировать задачу"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(task.id);
          }}
        >
          <FileText className="h-4 w-4" />
        </Button>
        <Button
          variant="danger"
          aria-label="Удалить задачу"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Task;
