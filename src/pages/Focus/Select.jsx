import EmptyState from "../../components/ui/EmptyState";

const Select = ({ tasks, value, onChange }) => {
  return (
    <form className="flex flex-col text-neutral-500">
      {tasks.length > 0 ? (
        <select value={value} onChange={onChange}>
          <option value="title">Выберите задачу</option>
          {tasks.map((task) => (
            <option key={task.id} value={task.id}>
              {task.title}
            </option>
          ))}
        </select>
      ) : (
        <EmptyState title="Нет задач" />
      )}
    </form>
  );
};

export default Select;
