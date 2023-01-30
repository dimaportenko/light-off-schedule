import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";

import { schedule } from "../data/schedule";
import { IQueueStore } from "./IRootStore";

export class QueueStore implements IQueueStore {
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
    runInAction(() => {
      this.fetchScheduleStatus = "pending";
    });
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dimaportenko/light-off-schedule/main/db/v2/schedule.json"
      );
      const data = await response.json();
      console.log("fetchSchedule", data);

      runInAction(() => {
        this.schedule = data;
        this.fetchScheduleStatus = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.fetchScheduleStatus = "error";
      });
    }
  };

  stopStore() {
    stopPersisting(this);
  }
}
