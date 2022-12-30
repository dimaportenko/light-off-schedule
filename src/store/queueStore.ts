import { makeAutoObservable } from "mobx";

export const createQueueStore = () => {
  const store = makeAutoObservable({
    selectedQueueIndex: 0,

    setSelectedQueueIndex: (index: number) => {
      store.selectedQueueIndex = index;
    },
  });

  return store;
};
