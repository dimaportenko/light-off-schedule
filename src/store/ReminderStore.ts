import { autorun, makeAutoObservable } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import * as Notifications from "expo-notifications";

import { scheduleLocalWeeklyNotifications } from "./reminder";
import { IReminderStore, IRootStore } from "./IRootStore";

export class ReminderStore implements IReminderStore {
  reminderEnabled = false;
  reminderTime = "00:15";

  constructor(root: IRootStore) {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "ReminderStore",
      properties: ["reminderEnabled", "reminderTime"],
    });

    autorun(() => {
      if (this.reminderEnabled) {
        scheduleLocalWeeklyNotifications(this.reminderTime, root);
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

  stopStore() {
    stopPersisting(this);
  }
}
