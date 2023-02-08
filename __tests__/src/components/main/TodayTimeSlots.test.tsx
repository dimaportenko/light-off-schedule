import { TodayTimeSlots } from "../../../../src/components/main/TodayTimeSlots";
import { root } from "../../../../src/store";
import { TEST_IDS } from "../../../../src/tests/ids";
import { act, render, screen } from "../../../utils/test-utils";

describe("TodayTimeSlots", () => {
  test("on slots", () => {
    root.settings.setSlotEnabled("on", true);
    const { rerender } = render(
      <TodayTimeSlots weekdayIndex={0} queueIndex={0} />
    );
    expect(
      screen.getAllByTestId(TEST_IDS.mainScreen.todayTimeSlots.on).length
    ).toBeGreaterThan(0);

    act(() => {
      root.settings.setSlotEnabled("on", false);
    });
    root.settings.setSlotEnabled("on", false);
    rerender(<TodayTimeSlots weekdayIndex={0} queueIndex={0} />);
    expect(
      screen.queryAllByTestId(TEST_IDS.mainScreen.todayTimeSlots.on).length
    ).toBe(0);
  });

  test("off slots", () => {
    root.settings.setSlotEnabled("off", true);
    const { rerender } = render(
      <TodayTimeSlots weekdayIndex={0} queueIndex={0} />
    );
    expect(
      screen.getAllByTestId(TEST_IDS.mainScreen.todayTimeSlots.off).length
    ).toBeGreaterThan(0);

    act(() => {
      root.settings.setSlotEnabled("off", false);
    });
    root.settings.setSlotEnabled("off", false);
    rerender(<TodayTimeSlots weekdayIndex={0} queueIndex={0} />);
    expect(
      screen.queryAllByTestId(TEST_IDS.mainScreen.todayTimeSlots.off).length
    ).toBe(0);
  });

  test("maybe slots", () => {
    root.settings.setSlotEnabled("maybe", true);
    const { rerender } = render(
      <TodayTimeSlots weekdayIndex={0} queueIndex={0} />
    );
    expect(
      screen.getAllByTestId(TEST_IDS.mainScreen.todayTimeSlots.maybe).length
    ).toBeGreaterThan(0);

    act(() => {
      root.settings.setSlotEnabled("maybe", false);
    });
    root.settings.setSlotEnabled("maybe", false);
    rerender(<TodayTimeSlots weekdayIndex={0} queueIndex={0} />);
    expect(
      screen.queryAllByTestId(TEST_IDS.mainScreen.todayTimeSlots.maybe).length
    ).toBe(0);
  });
});
