import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import FocusPage from "./pages/FocusPage";
import StatsPage from "./pages/StatsPage";
import SettingsPage from "./pages/SettingsPage";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="focus" element={<FocusPage />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
