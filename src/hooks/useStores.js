// Хук для доступа к хранилищам
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

export const useStores = () => {
  return useContext(StoreContext);
};
