import React, { FC } from "react";
import { Text } from "react-native";
import dayjs from "dayjs";
import tw from "../../lib/tailwind";
import { getCurrentWeekdayIndex } from "../../utils/date";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";

type CurrentSlotStatusProps = {
  queueIndex: number;
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
      <Text style={tw`text-[40px] text-center`}>
        {nextTimeSlot.type !== "off" ? "🌞" : "🌚"}
      </Text>
    );
  }
);
