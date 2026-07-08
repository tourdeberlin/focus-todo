import clsx from "clsx";

const variants = {
  colored:
    "bg-neutral-900 text-white border border-neutral-950/10 hover:bg-transparent  hover:text-neutral-900",
  bordered:
    "border border-neutral-950/10 hover:bg-neutral-900 hover:text-white",
    icon: 'hover:text-green-800',
    danger: 'hover:text-red-800'
};

const Button = ({ children, variant }) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer transition-colors",
        variants[variant],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
