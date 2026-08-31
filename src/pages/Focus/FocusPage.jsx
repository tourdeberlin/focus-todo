import useTasks from "../../hooks/useTasks";
import Timer from "./Timer";
import useHistory from "../../hooks/useHistory";
import Select from "./Select";
import useTimer from "../../hooks/useTimer";

const FocusPage = () => {
  const { timer } = useTimer();
  const { tasks, currentTaskId, setCurrentTaskId } = useTasks();
  const { history } = useHistory();

  const currentTask = tasks.find((task) => task.id === currentTaskId);

  const handleChangeSelect = (e) => {
    setCurrentTaskId(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center px-4 py-8">
      <h2 className="text-2xl pb-6 text-left">
        {timer.mode === "focus"
          ? "Фокус-сессия"
          : timer.mode === "shortBreak"
            ? "Короткий перерыв"
            : "Длинный перерыв"}
      </h2>
      {currentTask && (
        <div>
          <p>{currentTask.title}</p>
          <p className="text-neutral-500">{currentTask.description}</p>
        </div>
      )}
      {!currentTask && (
        <Select
          tasks={tasks}
          value={currentTaskId ?? ""}
          onChange={handleChangeSelect}
        />
      )}

      <Timer disabled={!currentTask} />
      <div className="flex gap-2 mt-4">
        <p className="text-neutral-500">Cессий завершено: {history.length}</p>
      </div>
    </div>
  );
};

export default FocusPage;
