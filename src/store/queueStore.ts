import { autorun, makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

import { schedule } from "../data/schedule";
import { scheduleLocalWeeklyNotifications } from "./reminder";

export const createQueueStore = () => {
  const storeKey = "@queue.store";
  const store = makeAutoObservable({
    schedule,
    selectedQueueIndex: 2,

    get selectedQueueSchedule() {
      return store.schedule[store.selectedQueueIndex];
    },

    reminderEnabled: false,
    reminderTime: "00:15",

    setSelectedQueueIndex: (index: number) => {
      store.selectedQueueIndex = index;
    },

    setReminderEnabled: (enabled: boolean) => {
      store.reminderEnabled = enabled;
    },

    setReminderTime: (time: string) => {
      store.reminderTime = time;
    },
  });

  autorun(() => {
    if (store.reminderEnabled) {
      scheduleLocalWeeklyNotifications(
        store.selectedQueueSchedule,
        store.reminderTime
      );
    } else {
      Notifications.cancelAllScheduledNotificationsAsync();
    }
  });

  const hydrate = async () => {
    const state = await AsyncStorage.getItem(storeKey);

    if (state) {
      const parsedState = JSON.parse(state);
      runInAction(() => {
        store.selectedQueueIndex = parsedState.selectedQueueIndex;
        store.reminderEnabled = parsedState.reminderEnabled ?? false;
        store.reminderTime = parsedState.reminderTime ?? "00:15";
      });
    }
  };

  const persist = async () => {
    const state = JSON.stringify({
      selectedQueueIndex: store.selectedQueueIndex,
      reminderEnabled: store.reminderEnabled,
      reminderTime: store.reminderTime,
    });

    try {
      await AsyncStorage.setItem(storeKey, state);
    } catch (error) {
      console.warn("Could not persist data", error);
    }
  };

  hydrate().then(() => {
    autorun(persist);
  });

  return store;
};
