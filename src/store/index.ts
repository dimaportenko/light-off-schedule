import "./persistConfig";
import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

export const root = new RootStore();

export const StoreContext = createContext<RootStore>(root);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
