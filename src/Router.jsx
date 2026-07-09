import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import FocusPage from "./pages/FocusPage";
import StatsPage from "./pages/StatsPage";
import SettingsPage from "./pages/SettingsPage";
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
