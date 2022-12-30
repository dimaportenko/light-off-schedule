import { createContext, useContext } from "react";
import { createQueueStore } from "./queueStore";

export type RootStore = {
  queue: ReturnType<typeof createQueueStore>;
};

let createRootStore = (): RootStore => {
  let store: any = {};

  store.queue = createQueueStore();

  return store;
};

export let root = createRootStore();

export let StoreContext = createContext<RootStore>(root);
export let StoreProvider = StoreContext.Provider;
export let useStore = () => useContext(StoreContext);
