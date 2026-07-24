import Input from "../../components/ui/Input";

const DurationSettings = ({ settings, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <h3 className="text-base">Длительность (минуты)</h3>
      <div className="flex gap-4">
        <Input
          label="Фокус"
          type="number"
          min="1"
          value={settings.focusDuration}
          onChange={(e) => onChange("focusDuration", e.target.value)}
        />
        <Input
          label="Перерыв"
          type="number"
          min="1"
          value={settings.shortBreakDuration}
          onChange={(e) => onChange("shortBreakDuration", e.target.value)}
        />
        <Input
          label="Длинный"
          type="number"
          min="1"
          value={settings.longBreakDuration}
          onChange={(e) => onChange("longBreakDuration", e.target.value)}
        />
      </div>
      <div className="flex w-full items-center justify-between rounded-lg border mt-2 border-neutral-300 bg-white py-3 px-2">
        <label className="text-sm">Сессий до длинного перерыва</label>
        <input
          type="number"
          className="w-20 h-9 bg-neutral-200 rounded-lg pl-3"
          min="2"
          value={settings.sessionsBeforeLongBreak}
          onChange={(e) => onChange("sessionsBeforeLongBreak", e.target.value)}
        />
      </div>
    </div>
  );
};

export default DurationSettings;
