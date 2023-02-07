import { SettingsScreen } from "../../../src/screens/SettingsScreen";
import { TEST_IDS } from "../../../src/tests/ids";
import { render, screen } from "../../utils/test-utils";

describe("SettingsScreen", () => {
  const props = {
    navigation: {} as any,
    route: {} as any,
  };

  test("SettingsScreen has title", () => {
    render(<SettingsScreen {...props} />);
    expect(screen.getByTestId(TEST_IDS.settingsScreen.screen)).toBeVisible();
  });
});
