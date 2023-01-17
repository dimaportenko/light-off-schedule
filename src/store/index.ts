import "./persistConfig";
import { createContext, useContext } from "react";
import { QueueStore } from "./queueStore";

export class RootStore {
  queue: QueueStore;

  constructor() {
    this.queue = new QueueStore();
  }
}

export const root = new RootStore();

export const StoreContext = createContext<RootStore>(root);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
