import Button from "../../components/ui/Button";
import Checkbox from "../../components/ui/Checkbox";
import { X, FileText } from "lucide-react";

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between border border-neutral-300 rounded-lg bg-white px-2 py-2">
      <div className="flex gap-3 items-center">
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />

        <div className="flex flex-col items-start gap-1">
          <p>{task.title}</p>
          {task.description && <p className="text-neutral-500 text-sm">{task.description}</p>}
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="icon"
          aria-label="Редактировать задачу"
          onClick={() => onEdit(task.id)}
        >
          <FileText className="h-4 w-4" />
        </Button>
        <Button
          variant="danger"
          aria-label="Удалить задачу"
          onClick={() => onDelete(task.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Task;
