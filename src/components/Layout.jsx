import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="flex flex-col items-center w-4xl bg-neutral-50">
      <h1 className="text-base m-8">Фокус-сессии</h1>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
