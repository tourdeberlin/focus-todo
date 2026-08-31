const StatsCard = ({ stats, title }) => {
  return (
    <div className="flex flex-col border border-neutral-300 bg-white rounded-lg p-4 w-51">
      <h4 className=" text-3xl">{stats}</h4>
      <p className="text-neutral-500">{title}</p>
    </div>
  );
};

export default StatsCard;
