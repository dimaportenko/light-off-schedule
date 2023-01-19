import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";

import { schedule } from "../data/schedule";

export class QueueStore {
  schedule = schedule;
  selectedQueueIndex = 2;
  fetchScheduleStatus = "idle";

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "QueueStore",
      properties: ["schedule", "selectedQueueIndex"],
    });
  }

  get selectedQueueSchedule() {
    return this.schedule[this.selectedQueueIndex];
  }

  setSelectedQueueIndex = (index: number) => {
    this.selectedQueueIndex = index;
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

  stopStore() {
    stopPersisting(this);
  }
}
