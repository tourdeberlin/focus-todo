const Switch = ({ enabled, ...props }) => {
  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={enabled}
          {...props}
        />
        <div
          className={`w-14 h-8 rounded-full transition-colors duration-300 ease-in-out ${
            enabled ? "bg-black" : "bg-gray-300"
          }`}
        />
        <div
          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>{" "}
    </label>
  );
};

export default Switch;
