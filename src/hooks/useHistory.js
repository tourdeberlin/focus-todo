import { useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function useHistory() {
  const { history, historyDispatch } = useContext(AppContext);
  return {
    history,
    historyDispatch,
  };
}