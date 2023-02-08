import { IRootStore } from "./IRootStore";
import { QueueStore } from "./QueueStore";
import { ReminderStore } from "./ReminderStore";
import { SettingsStore } from "./SettingsStore";

export class RootStore implements IRootStore {
  queue: QueueStore;
  reminder: ReminderStore;
  settings: SettingsStore;

  constructor() {
    this.queue = new QueueStore();
    this.reminder = new ReminderStore(this);
    this.settings = new SettingsStore();
  }
}
