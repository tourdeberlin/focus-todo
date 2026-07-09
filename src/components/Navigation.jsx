import { ListTodo, Brain, ChartColumn, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  return (
    <div className="flex rounded-[14px] justify-center items-center bg-neutral-300 w-md h-9">
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(
            "flex items-center justify-center w-27.5 h-7.25 rounded-[14px]",
            isActive ? "bg-white" : "bg-transparent",
          )
        }
      >
        <ListTodo />
      </NavLink>
      <NavLink
        to="focus"
        className={({ isActive }) =>
          clsx(
            "flex items-center justify-center w-27.5 h-7.25 rounded-[14px]",
            isActive ? "bg-white" : "bg-transparent",
          )
        }
      >
        <Brain />
      </NavLink>
      <NavLink
        to="stats"
        className={({ isActive }) =>
          clsx(
            "flex items-center justify-center w-27.5 h-7.25 rounded-[14px]",
            isActive ? "bg-white" : "bg-transparent",
          )
        }
      >
        <ChartColumn />
      </NavLink>
      <NavLink
        to="settings"
        className={({ isActive }) =>
          clsx(
            "flex items-center justify-center w-27.5 h-7.25 rounded-[14px]",
            isActive ? "bg-white" : "bg-transparent",
          )
        }
      >
        <Settings />
      </NavLink>
    </div>
  );
};

export default Navigation;