import { autorun, makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import * as Notifications from "expo-notifications";

import { schedule, QueueSchedule } from "../data/schedule";



export const scheduleLocalWeeklyNotifications = async (queueSchedule: QueueSchedule, time: number) => {
  // cancel all notifications
  await Notifications.cancelAllScheduledNotificationsAsync();

  // map schedule to weekly notifications
  // const notifications = Object.entries(queueSchedule).map(([day, timeSlots]) => {
   
  


};

export const createQueueStore = () => {
  const storeKey = "@queue.store";
  const store = makeAutoObservable({
    schedule,
    selectedQueueIndex: 2,
    reminderEnabled: false,

    setSelectedQueueIndex: (index: number) => {
      store.selectedQueueIndex = index;
    },

    setReminderEnabled: (enabled: boolean) => {
      store.reminderEnabled = enabled;
    },
  });

  const hydrate = async () => {
    const state = await AsyncStorage.getItem(storeKey);

    if (state) {
      const parsedState = JSON.parse(state);
      runInAction(() => {
        store.selectedQueueIndex = parsedState.selectedQueueIndex;
        store.reminderEnabled = parsedState.reminderEnabled ?? false;
      });
    }
  };

  const persist = async () => {
    const state = JSON.stringify({
      selectedQueueIndex: store.selectedQueueIndex,
      reminderEnabled: store.reminderEnabled,
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
