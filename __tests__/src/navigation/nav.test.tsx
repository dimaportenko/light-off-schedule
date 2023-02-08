import { AppNavigator } from "../../../src/navigation/AppNavigator";
import { TEST_IDS } from "../../../src/tests/ids";
import { fireEvent, render, screen } from "../../utils/test-utils";

describe("Main to Settings navigation", () => {
  test("MainScreen has settings button", async () => {
    render(<AppNavigator />);

    const settingsButton = screen.getByTestId(
      TEST_IDS.mainScreen.settingsButton
    );
    expect(settingsButton).toBeVisible();
    expect(screen.getByTestId(TEST_IDS.icons.settings)).toBeVisible();

    fireEvent.press(settingsButton);

    const settingsScreen = await screen.findByTestId(
      TEST_IDS.settingsScreen.screen
    );
    expect(settingsScreen).toBeVisible();

    const backButton = screen.getByTestId(TEST_IDS.common.navHeader.backButton);
    fireEvent.press(backButton);

    expect(
      await screen.findByTestId(TEST_IDS.mainScreen.queueTitle)
    ).toBeVisible();
  });
});
