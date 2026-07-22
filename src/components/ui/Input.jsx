const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col flex-1 items-start gap-1">
      {label && <label className="text-sm">{label}</label>}
      <input
        className="w-full pl-3 py-2 text-sm bg-neutral-200 rounded-lg "
        {...props}
      />
    </div>
  );
};

export default Input;
