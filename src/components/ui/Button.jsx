import clsx from "clsx";

const variants = {
  colored:
    "bg-neutral-900 text-white border border-neutral-950/10 px-3 py-2",
  bordered:
    "border border-neutral-950/10 px-3 py-2 hover:bg-neutral-900 hover:text-white",
  icon: "hover:text-green-800 px-0 py-2 text-neutral-400",
  danger: "hover:text-red-800 px-0 py-2 text-neutral-400",
};

const Button = ({ children, variant, ...props }) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-3 rounded-lg text-sm font-medium cursor-pointer transition-colors",
        variants[variant],
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
