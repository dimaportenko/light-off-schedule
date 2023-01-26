import React, { FC } from "react";
import { View, Text } from "react-native";
import dayjs from "dayjs";
// add relativeTime plugin
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// add custom parse format plugin
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import {
  getCurrentWeekdayIndex,
  nextWillBeInLabel,
  WeekdDayIndexType,
} from "../../utils/date";
import tw from "../../lib/tailwind";
import { translate } from "../../i18n";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";

type NextTimeSlotCountProps = {
  queueIndex: number;
};

export const NextTimeSlotCount: FC<NextTimeSlotCountProps> = observer(
  ({ queueIndex }) => {
    const { queue } = useStore();
    // get the current weekday index
    const weekdayIndex = getCurrentWeekdayIndex();
    // get time slots for the current weekday
    const queueSlots = queue.schedule[queueIndex][weekdayIndex];

    const currentTimeSlot = queueSlots.find(
      (slot) =>
        dayjs().isAfter(dayjs(slot.start, "HH:mm")) &&
        dayjs().isBefore(dayjs(slot.end, "HH:mm"))
    );
    // today dayjs object with start time
    // get the next time slot
    let nextTimeSlot = queueSlots.find((slot) => {
      const startTime = dayjs(slot.start, "HH:mm");
      if (currentTimeSlot?.type === "off") {
        return startTime.isAfter(dayjs());
      } else {
        return startTime.isAfter(dayjs()) && slot.type === "off";
      }
    });

    let timeToNextTimeSlot: string;
    if (!nextTimeSlot) {
      const tomorrowIndex = ((weekdayIndex + 1) % 7) as WeekdDayIndexType;
      const tomorrowSlots = queue.schedule[queueIndex][tomorrowIndex];
      nextTimeSlot = tomorrowSlots
        .slice(1, tomorrowSlots.length)
        .find((slot) => {
          return (
            (currentTimeSlot?.type === "off" && slot.type !== "off") ||
            (currentTimeSlot?.type !== "off" && slot.type === "off")
          );
        });
      console.warn("nextTimeSlot", nextTimeSlot);
      if (!nextTimeSlot) {
        return null;
      }
      // timeToNextTimeSlot = dayjs(nextTimeSlot.start, "HH:mm")
      //   .add(1, "day")
      //   .fromNow();
      timeToNextTimeSlot = nextWillBeInLabel(nextTimeSlot.start, 1);
    } else {
      // how much time to next time slot
      timeToNextTimeSlot = nextWillBeInLabel(nextTimeSlot.start);
    }

    return (
      <View>
        <Text style={tw`text-xl text-center`}>
          {nextTimeSlot.type !== "off"
            ? translate("mainScreen.nextTurnOn")
            : translate("mainScreen.nextTurnOff")}
          <Text>{` ${timeToNextTimeSlot}`}</Text>
        </Text>
      </View>
    );
  }
);
