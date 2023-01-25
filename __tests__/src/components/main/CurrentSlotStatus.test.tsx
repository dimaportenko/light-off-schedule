import React from "react";
import tk from "timekeeper";
import { render } from "../../../utils/test-utils";
import { CurrentSlotStatus } from "../../../../src/components/main/CurrentSlotStatus";
import { TEST_IDS } from "../../../../src/tests/ids";
import { getSlotTypeEmoji } from "../../../../src/utils/timeSlot";

describe("CurrentSlotStatus", () => {
  // Tue Feb 14 2017 14:51:48 GMT+0200
  const startTimestamp = 1487076708000;

  afterEach(() => {
    tk.reset();
  });

  test("first time interval", () => {
    // + 4 * 60 * 60 * 1000 // + 4 hours
    const time = new Date(startTimestamp - 4 * 60 * 60 * 1000);
    tk.freeze(time);

    const { getAllByTestId } = render(<CurrentSlotStatus queueIndex={2} />);
    const statusEmojiBySlotType = getSlotTypeEmoji("maybe");
    const statusEmoji = getAllByTestId(TEST_IDS.currentSlotStatus.statusEmoji);
    expect(statusEmoji[0].props.children).toBe(statusEmojiBySlotType);
  });

  test("second time interval", () => {
    const time = new Date(startTimestamp);
    tk.freeze(time);

    const statusEmojiBySlotType = getSlotTypeEmoji("off");

    const { getAllByTestId } = render(<CurrentSlotStatus queueIndex={2} />);
    const statusEmoji = getAllByTestId(TEST_IDS.currentSlotStatus.statusEmoji);
    expect(statusEmoji[0].props.children).toBe(statusEmojiBySlotType);
  });

  test("third time interval", () => {
    // + 4 * 60 * 60 * 1000
    const time = new Date(startTimestamp + 4 * 60 * 60 * 1000);
    tk.freeze(time);

    const statusEmojiBySlotType = getSlotTypeEmoji("on");

    const { getAllByTestId } = render(<CurrentSlotStatus queueIndex={2} />);
    const statusEmoji = getAllByTestId(TEST_IDS.currentSlotStatus.statusEmoji);
    expect(statusEmoji[0].props.children).toBe(statusEmojiBySlotType);
  });
});
