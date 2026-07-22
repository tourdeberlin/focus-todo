import useHistory from "../../hooks/useHistory";
import useTasks from "../../hooks/useTasks";
import StatsCard from "./StatsCard";

const StatsPage = () => {
  const { history } = useHistory();
  const { tasks } = useTasks();

  const completedTasks = tasks.filter((task) => task.completed);
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="flex flex-col items-start gap-6">
      <h3 className="text-base">Статистика</h3>
      <div className="flex gap-4">
        <StatsCard stats="0" title="Сегодня" />
        <StatsCard stats={history.length} title="Всего сессий" />
        <StatsCard stats={completedTasks.length} title="Выполнено" />
        <StatsCard stats={activeTasks.length} title="Активных" />
      </div> 
      <h3 className="text-base">История</h3>
    </div>
  );
};

export default StatsPage;
