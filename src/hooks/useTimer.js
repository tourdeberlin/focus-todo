import { useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function useSettings() {
  const { timer, timerDispatch } = useContext(AppContext);
  return {
    timer,
    timerDispatch,
  };
}
