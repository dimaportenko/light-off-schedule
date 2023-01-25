import { QueueSchedule } from "../data/schedule";

export interface IQueueStore {
  selectedQueueSchedule: QueueSchedule;
}

export interface IReminderStore {
  setReminderEnabled: (enabled: boolean) => void;
}

export interface IRootStore {
  queue: IQueueStore;
  reminder: IReminderStore;
}
