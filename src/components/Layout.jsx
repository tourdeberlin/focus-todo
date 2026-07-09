import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <h1 className="text-2xl m-8">Фокус-сессии</h1>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
