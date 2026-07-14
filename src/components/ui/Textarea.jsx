const Textarea = ({ ...props }) => {
  return (
    <div className="rounded-lg flex-1 bg-neutral-200">
      <textarea className="w-full pl-2 py-1 outline-none text-sm" {...props}/>
    </div>
  );
};

export default Textarea;
