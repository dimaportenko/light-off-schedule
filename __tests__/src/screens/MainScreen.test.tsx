// jest test for MainScreen.tsx

import React from "react";
import tk from "timekeeper";
import { render, screen, fireEvent } from "../../utils/test-utils";
import { MainScreen } from "../../../src/screens/MainScreen";
import { root } from "../../../src/store";
import { translate } from "../../../src/i18n";
import { TEST_IDS } from "../../../src/tests/ids";
import { romeNumberArray } from "../../../src/utils/romeNumbers";

describe("MainScreen", () => {
  const startTimestamp = 1487076708000;
  const props = {
    navigation: {} as any,
    route: {} as any,
  };

  beforeAll(() => {
    const time = new Date(startTimestamp);
    tk.freeze(time);
  });

  afterAll(() => {
    // Unlock Time
    tk.reset();
  });

  // queue index 0
  test("renders MainScreen for queue 0", () => {
    root.queue.setSelectedQueueIndex(0);
    render(<MainScreen {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  // queue index 1
  test("renders MainScreen for queue 1", () => {
    root.queue.setSelectedQueueIndex(1);
    render(<MainScreen {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  // queue index 2
  test("renders MainScreen for queue 2", () => {
    root.queue.setSelectedQueueIndex(2);
    render(<MainScreen {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test("MainScreen has queue label", () => {
    root.queue.setSelectedQueueIndex(2);
    render(<MainScreen {...props} />);
    expect(
      screen.getByTestId(TEST_IDS.mainScreen.queueTitle)
    ).toHaveTextContent(translate("mainScreen.queue"));
  });

  test("MainScreen has settings button", () => {
    root.queue.setSelectedQueueIndex(2);
    render(<MainScreen {...props} />);
    expect(
      screen.getByTestId(TEST_IDS.mainScreen.settingsButton)
    ).toBeVisible();
    expect(screen.getByTestId(TEST_IDS.icons.settings)).toBeVisible();
    // screen.debug(screen.getByTestId(TEST_IDS.mainScreen.settingsButton));
  });

  test("MainScreen select queue", async () => {
    const index = 1;
    render(<MainScreen {...props} />);

    expect(
      screen.getByTestId(TEST_IDS.mainScreen.queueTitle)
    ).toHaveTextContent(
      romeNumberArray[index] + " " + translate("mainScreen.queue")
    );

    fireEvent.press(screen.getByTestId(TEST_IDS.mainScreen.queueTitle));
    const picker = await screen.findByTestId(TEST_IDS.queuePicker.picker);
    fireEvent(picker, "onValueChange", index);

    expect(
      screen.getByTestId(TEST_IDS.mainScreen.queueTitle)
    ).toHaveTextContent(
      romeNumberArray[index] + " " + translate("mainScreen.queue")
    );

    expect(root.queue.selectedQueueIndex).toBe(index);
  });
});
