import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { TimeSlotType } from "../data/schedule";
import { ISettingsStore } from "./IRootStore";

export class SettingsStore implements ISettingsStore {
  slotsEnabled: Record<TimeSlotType, boolean> = {
    on: false,
    off: true,
    maybe: true,
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "SettingsStore",
      properties: ["slotsEnabled"],
    });
  }

  setSlotEnabled = (slot: TimeSlotType, enabled: boolean) => {
    this.slotsEnabled[slot] = enabled;
  };
}
