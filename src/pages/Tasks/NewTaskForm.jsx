import { Plus } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const NewTaskForm = ({onSubmit, value, onChange}) => {
  return (
    <form className="flex justify-between gap-2 pb-6" onSubmit={onSubmit}>
      <Input placeholder="Добавить новую задачу..." value={value} onChange={onChange}/>
      <Button type="submit" variant="colored" aria-label="Добавить новую задачу">
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default NewTaskForm;
