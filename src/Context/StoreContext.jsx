import { createContext } from "react";
import RootStore from "../stores/RootStore";

export const store = RootStore;
export const StoreContext = createContext(store);

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
