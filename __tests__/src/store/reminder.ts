import { schedule } from "../../../src/data/schedule";
import { prepareNotifiationsInput } from "../../../src/store/reminder";

describe("schedule reminder notification", () => {
  test("prepare notification inputs`", () => {
    const queueSchedule = schedule[2];

    const notificationInputs = prepareNotifiationsInput(queueSchedule, "00:15");

    expect(notificationInputs).toMatchSnapshot();
  });
});
