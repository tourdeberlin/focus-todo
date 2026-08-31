import {  useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function useSettings() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useSettings must be used inside a AppProvider");
  }

  return {
    settings: context.settings,
    settingsDispatch: context.settingsDispatch,
  };

}
