import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/Tasks/TasksPage";
import FocusPage from "./pages/Focus/FocusPage";
import StatsPage from "./pages/Stats/StatsPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import Layout from "./components/Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<TasksPage />} />
        <Route path="/focus" element={<FocusPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
