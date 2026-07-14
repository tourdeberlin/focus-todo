import Input from "../../components/ui/Input";
import Modal from "../../components/ui/Modal";
import Textarea from "../../components/ui/Textarea";
import { useState } from "react";

const EditTaskModal = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = () => {
    onSave({
      id: task.id,
      title,
      description,
    });
  };

  return (
    <Modal onClose={onClose} title="Редактировать задачу" onSave={handleSubmit}>
      <h3 className="mt-4 mb-1 text-left font-medium">Название</h3>
      <Input
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h3 className="mt-4 mb-1 text-left font-medium">Описание</h3>
      <Textarea
        placeholder="Добавьте описание задачи..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
};

export default EditTaskModal;
