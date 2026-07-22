import Switch from "../../components/ui/Switch";

const AutomationSettings = ({ settings, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <h3 className="text-base">Автоматизация</h3>
      <div className="flex w-full items-center justify-between rounded-lg border mt-2 border-neutral-300 bg-white py-1 px-2">
        <span className="text-sm">Автостарт перерыва</span>
        <Switch
          enabled={settings.autoBreakStart}
          onChange={() => onChange("autoBreakStart", !settings.autoBreakStart)}
        />
      </div>
      <div className="flex w-full items-center justify-between rounded-lg border mt-2 border-neutral-300 bg-white py-1 px-2">
        <span className="text-sm">Автостарт фокус-сессии</span>
        <Switch
          enabled={settings.autoFocusStart}
          onChange={() => onChange("autoFocusStart", !settings.autoFocusStart)}
        />
      </div>
    </div>
  );
};

export default AutomationSettings;
