import { autorun, makeAutoObservable, runInAction } from "mobx";
import * as Notifications from "expo-notifications";
import { makePersistable } from "mobx-persist-store";

import { schedule } from "../data/schedule";
import { scheduleLocalWeeklyNotifications } from "./reminder";

export class QueueStore {
  schedule = schedule;
  selectedQueueIndex = 2;
  fetchScheduleStatus = "idle";

  reminderEnabled = false;
  reminderTime = "00:15";

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "QueueStore",
      properties: [
        "schedule",
        "selectedQueueIndex",
        "reminderEnabled",
        "reminderTime",
      ],
    });

    autorun(() => {
      if (this.reminderEnabled) {
        scheduleLocalWeeklyNotifications(
          this.selectedQueueSchedule,
          this.reminderTime
        );
      } else {
        Notifications.cancelAllScheduledNotificationsAsync();
      }
    });
  }

  get selectedQueueSchedule() {
    return this.schedule[this.selectedQueueIndex];
  }

  setSelectedQueueIndex = (index: number) => {
    this.selectedQueueIndex = index;
  };

  setReminderEnabled = (enabled: boolean) => {
    this.reminderEnabled = enabled;
  };

  setReminderTime = (time: string) => {
    this.reminderTime = time;
  };

  fetchSchedule = async () => {
    this.fetchScheduleStatus = "pending";
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dimaportenko/light-off-schedule/main/db/v1/schedule.json"
      );
      const data = await response.json();
      console.log("fetchSchedule", data);

      runInAction(() => {
        this.schedule = data;
        this.fetchScheduleStatus = "done";
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.fetchScheduleStatus = "error";
      });
    }
  };
}
