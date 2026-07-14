import Button from "./Button";
import { X } from "lucide-react";

const Modal = ({ onClose, title, onSave, children }) => {
  return (
    <div onClick={onClose}>
      <div className="w-screen h-screen flex justify-center items-center bg-neutral-900/50 fixed inset-0">
        <form
          onSubmit={onSave}
          className="relative flex flex-col items-start justify-center p-6 w-xl bg-white rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            type="button"
            variant="icon"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
            className="absolute top-4 right-4 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </Button>

          <h2 className="font-bold">{title}</h2>

          <div className="w-full">{children}</div>
          <div className="flex gap-2 mt-4 self-end">
            <Button type="button" variant="bordered" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" variant="colored" onClick={onSave}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
