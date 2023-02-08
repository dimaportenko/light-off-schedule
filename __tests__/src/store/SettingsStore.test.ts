import { SettingsStore } from "../../../src/store/SettingsStore";

describe("SettingsStore", () => {
  it("should be able to set a slot as enabled", () => {
    const settingsStore = new SettingsStore();
    expect(settingsStore.slotsEnabled.on).toBe(false);
    settingsStore.setSlotEnabled("on", true);
    expect(settingsStore.slotsEnabled.on).toBe(true);

    expect(settingsStore.slotsEnabled.off).toBe(true);
    settingsStore.setSlotEnabled("off", false);
    expect(settingsStore.slotsEnabled.off).toBe(false);

    expect(settingsStore.slotsEnabled.maybe).toBe(true);
    settingsStore.setSlotEnabled("maybe", false);
    expect(settingsStore.slotsEnabled.maybe).toBe(false);
  });
});
