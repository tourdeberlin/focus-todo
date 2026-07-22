import useSettings from "../../hooks/useSettings";
import AutomationSettings from "./AutomationSettings";
import DurationSettings from "./DurationSettings";

const SettingsPage = () => {
  const { settings, settingsDispatch } = useSettings();

  const handleSettingChange = (key, value) => {
    settingsDispatch({
      type: "SET_SETTING",
      key,
      value,
    });
  };

  return (
    <div className="flex flex-col items-start gap-6 w-lg m-10">
      <h3 className="text-base">Настройки</h3>
      <DurationSettings settings={settings} onChange={handleSettingChange} />
      <AutomationSettings settings={settings} onChange={handleSettingChange} />
    </div>
  );
};

export default SettingsPage;
