const Textarea = ({ placeholder }) => {
  return (
    <div className="border border-neutral-950/10 rounded-lg flex-1 bg-neutral-300">
      <input
        className="w-full pl-2 py-1 outline-none text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
