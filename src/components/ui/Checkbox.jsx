import clsx from "clsx";
import { Check } from "lucide-react";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="flex justify-center items-center cursor-pointer">
      <input
        className="sr-only appearance-none"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={clsx(
          "flex justify-center items-center border rounded-full w-4 h-4",
          checked ? "border-green-600" : "border-neutral-500",
        )}
      >
        <Check
          className={clsx(
            "h-4 w-4 opacity-0 text-green-600 transition-opacity",
            checked ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
    </label>
  );
};

export default Checkbox;
