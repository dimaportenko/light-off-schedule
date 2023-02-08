import { SettingsScreen } from "../../../src/screens/SettingsScreen";
import { root } from "../../../src/store";
import { TEST_IDS } from "../../../src/tests/ids";
import { fireEvent, render, screen } from "../../utils/test-utils";

describe("SettingsScreen", () => {
  const props = {
    navigation: {} as any,
    route: {} as any,
  };

  test("SettingsScreen has title", () => {
    render(<SettingsScreen {...props} />);
    expect(screen.getByTestId(TEST_IDS.settingsScreen.screen)).toBeVisible();
  });

  test("SettingsScreen", () => {
    render(<SettingsScreen {...props} />);
    expect(
      screen.getByTestId(TEST_IDS.settingsScreen.switchLightSlotOn)
    ).toBeVisible();

    const lightOn = root.settings.slotsEnabled.on;
    const lightOnSwitcher = screen.getByTestId(
      TEST_IDS.settingsScreen.switchLightSlotOn + "-switcher"
    );
    fireEvent(lightOnSwitcher, "onValueChange", !lightOn);
    expect(root.settings.slotsEnabled.on).toBe(!lightOn);

    expect(
      screen.getByTestId(TEST_IDS.settingsScreen.switchLightSlotOff)
    ).toBeVisible();

    const lightOff = root.settings.slotsEnabled.off;
    const lightOffSwitcher = screen.getByTestId(
      TEST_IDS.settingsScreen.switchLightSlotOff + "-switcher"
    );
    fireEvent(lightOffSwitcher, "onValueChange", !lightOff);
    expect(root.settings.slotsEnabled.off).toBe(!lightOff);

    expect(
      screen.getByTestId(TEST_IDS.settingsScreen.switchLightSlotMaybe)
    ).toBeVisible();

    const lightMaybe = root.settings.slotsEnabled.maybe;
    const lightMaybeSwitcher = screen.getByTestId(
      TEST_IDS.settingsScreen.switchLightSlotMaybe + "-switcher"
    );
    fireEvent(lightMaybeSwitcher, "onValueChange", !lightMaybe);
    expect(root.settings.slotsEnabled.maybe).toBe(!lightMaybe);
  });
});
