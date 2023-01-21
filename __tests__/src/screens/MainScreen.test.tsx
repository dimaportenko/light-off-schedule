// jest test for MainScreen.tsx

import React from "react";
import { render } from "../../utils/test-utils";
import { MainScreen } from "../../../src/screens/MainScreen";
import { root } from "../../../src/store";

describe("MainScreen", () => {
  // queue index 0
  test("renders MainScreen for queue 0", () => {
    root.queue.setSelectedQueueIndex(0);
    const { toJSON } = render(<MainScreen />);
    expect(toJSON()).toMatchSnapshot();
  });

  // queue index 1
  test("renders MainScreen for queue 1", () => {
    root.queue.setSelectedQueueIndex(1);
    const { toJSON } = render(<MainScreen />);
    expect(toJSON()).toMatchSnapshot();
  });

  // queue index 2
  test("renders MainScreen for queue 2", () => {
    root.queue.setSelectedQueueIndex(2);
    const { toJSON } = render(<MainScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});