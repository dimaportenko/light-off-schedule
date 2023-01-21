import { QueueStore } from "./QueueStore";
import { ReminderStore } from "./ReminderStore";

export class RootStore {
  queue: QueueStore;
  reminder: ReminderStore;

  constructor() {
    this.queue = new QueueStore();
    this.reminder = new ReminderStore(this);
  }
}
