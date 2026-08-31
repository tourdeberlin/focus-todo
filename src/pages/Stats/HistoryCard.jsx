const HistoryCard = ({ session }) => {
  return (
    <div className="flex justify-between items-center border border-neutral-300 rounded-lg p-3 bg-white">
      <div className="flex flex-col">
        <h3>{session.task.title}</h3>
        <span className="text-left text-neutral-500 text-sm">{session.startedAt}</span>
      </div>
      <p className="text-neutral-500 text-sm">{session.duration}</p>
    </div>
  );
};

export default HistoryCard;
  