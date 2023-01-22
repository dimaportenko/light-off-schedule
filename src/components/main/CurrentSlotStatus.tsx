import React, { FC } from "react";
import { Text } from "react-native";
import dayjs from "dayjs";
import tw from "../../lib/tailwind";
import { getCurrentWeekdayIndex } from "../../utils/date";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { TEST_IDS } from "../../tests/ids";
import { TimeSlotType } from "../../data/schedule";

type CurrentSlotStatusProps = {
  queueIndex: number;
};

const getSlotTypeEmoji = (type: TimeSlotType) => {
  switch (type) {
    case "on":
      return "🌞";
    case "off":
      return "🌚";
    case "maybe":
      return "🌗";
  }
};

export const CurrentSlotStatus: FC<CurrentSlotStatusProps> = observer(
  ({ queueIndex }) => {
    const { queue } = useStore();
    // get the current weekday index
    const weekdayIndex = getCurrentWeekdayIndex();
    // get time slots for the current weekday
    const queueSlots = queue.schedule[queueIndex][weekdayIndex];
    // today dayjs object with start time
    // get the next time slot
    const nextTimeSlot = queueSlots.find((slot) => {
      const startTime = dayjs(slot.start, "HH:mm");
      const endTime = dayjs(slot.end, "HH:mm");

      return startTime.isBefore(dayjs()) && endTime.isAfter(dayjs());
    });

    if (!nextTimeSlot) {
      return null;
    }

    return (
      <Text
        style={tw`text-[40px] text-center`}
        testID={TEST_IDS.currentSlotStatus.statusEmoji}
      >
        {getSlotTypeEmoji(nextTimeSlot.type)}
      </Text>
    );
  }
);
