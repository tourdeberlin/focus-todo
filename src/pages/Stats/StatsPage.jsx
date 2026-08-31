import useHistory from "../../hooks/useHistory";
import useTasks from "../../hooks/useTasks";
import StatsCard from "./StatsCard";
import HistoryCard from "./HistoryCard";
import EmptyState from "../../components/ui/EmptyState";

const StatsPage = () => {
  const { history } = useHistory();
  const { tasks } = useTasks();

  const completedTasks = tasks.filter((task) => task.completed);
  const activeTasks = tasks.filter((task) => !task.completed);

  const today = new Date().toDateString();


  const todaySessios = history.filter(
    (session) => new Date(session.finishedAt).toDateString() === today,
  );

  return (
    <div className="flex flex-col items-start gap-6 mb-3">
      <h3 className="text-base">Статистика</h3>
      <div className="flex gap-4">
        <StatsCard stats={todaySessios.length} title="Сегодня" />
        <StatsCard stats={history.length} title="Всего сессий" />
        <StatsCard stats={completedTasks.length} title="Выполнено" />
        <StatsCard stats={activeTasks.length} title="Активных" />
      </div>
      <h3 className="text-base">История</h3>
      <div className="flex flex-col w-full gap-3">
        {history.length > 0 ? (
          history.map((session) => (
            <HistoryCard key={session.task.id} session={session} />
          ))
        ) : (
          <EmptyState title="Нет завершенных сессий" />
        )}
      </div>
    </div>
  );
};

export default StatsPage;
