import "./persistConfig";
import { createContext, useContext } from "react";
import { QueueStore } from "./QueueStore";
import { ReminderStore } from "./ReminderStore";

export class RootStore {
  queue: QueueStore;
  reminder: ReminderStore;

  constructor() {
    this.queue = new QueueStore();
    this.reminder = new ReminderStore(this);
  }
}

export const root = new RootStore();

export const StoreContext = createContext<RootStore>(root);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
