import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";

import { schedule } from "../data/schedule";
import { IQueueStore } from "./IRootStore";

export class QueueStore implements IQueueStore {
  schedule = schedule;
  selectedQueueIndex = 0;
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
        "https://raw.githubusercontent.com/dimaportenko/light-off-schedule/main/db/v3/schedule.json"
      );
      const data = await response.json();
      // local testing
      // const data = require("../../db/v3/schedule.json")
      console.log("fetchSchedule", data);

      runInAction(() => {
        this.selectedQueueIndex =
          data.length > this.selectedQueueIndex ? this.selectedQueueIndex : 0;
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
