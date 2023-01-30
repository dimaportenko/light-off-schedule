import { IRootStore } from "./IRootStore";
import { QueueStore } from "./QueueStore";
import { ReminderStore } from "./ReminderStore";

export class RootStore implements IRootStore {
  queue: QueueStore;
  reminder: ReminderStore;

  constructor() {
    this.queue = new QueueStore();
    this.reminder = new ReminderStore(this);
  }
}
