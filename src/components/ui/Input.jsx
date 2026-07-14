const Input = ({ label, ...props }) => {
  return (
    <div className="flex-1 rounded-lg bg-neutral-200">
      {label && <label className="text-sm">{label}</label>}
      <input className="w-full pl-3 py-2 text-sm " {...props} />
    </div>
  );
};

export default Input;
