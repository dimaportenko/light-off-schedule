import { autorun, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import * as Notifications from "expo-notifications";

import { RootStore } from "./RootStore";
import { scheduleLocalWeeklyNotifications } from "./reminder";

export class ReminderStore {
  reminderEnabled = false;
  reminderTime = "00:15";

  constructor(root: RootStore) {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "QueueStore",
      properties: ["reminderEnabled", "reminderTime"],
    });

    autorun(() => {
      if (this.reminderEnabled) {
        scheduleLocalWeeklyNotifications(
          root.queue.selectedQueueSchedule,
          this.reminderTime
        );
      } else {
        Notifications.cancelAllScheduledNotificationsAsync();
      }
    });
  }

  setReminderEnabled = (enabled: boolean) => {
    this.reminderEnabled = enabled;
  };

  setReminderTime = (time: string) => {
    this.reminderTime = time;
  };
}
