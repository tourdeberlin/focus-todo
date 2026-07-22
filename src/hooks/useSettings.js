import { useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function useSettings() {
  const { settings, settingsDispatch } = useContext(AppContext);
  return {
    settings,
    settingsDispatch,
  };
}
