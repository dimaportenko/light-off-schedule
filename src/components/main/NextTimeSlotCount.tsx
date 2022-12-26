import React, { FC } from "react";
import { View, Text } from "react-native";
import dayjs from "dayjs";
// add relativeTime plugin
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// add custom parse format plugin
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import { schedule } from "../../data/schedule";
import { getCurrentWeekdayIndex } from "../../utils/date";
import tw from "../../lib/tailwind";
import { translate } from "../../i18n";

type NextTimeSlotCountProps = {
  queueIndex: number;
};

export const NextTimeSlotCount: FC<NextTimeSlotCountProps> = ({
  queueIndex,
}) => {
  // get the current weekday index
  const weekdayIndex = getCurrentWeekdayIndex();
  // get time slots for the current weekday
  const queueSlots = schedule[queueIndex][weekdayIndex];
  // today dayjs object with start time
  // get the next time slot
  const nextTimeSlot = queueSlots.find((slot) => {
    const startTime = dayjs(slot.start, "HH:mm");
    return startTime.isAfter(dayjs());
  });

  if (!nextTimeSlot) {
    return null;
  }

  // how much time to next time slot
  const timeToNextTimeSlot = dayjs(nextTimeSlot.start, "HH:mm").fromNow();

  return (
    <View>
      <Text style={tw`text-xl text-center`}>
        {nextTimeSlot.type === "on"
          ? translate("mainScreen.nextTurnOn")
          : translate("mainScreen.nextTurnOff")}
        <Text>{` ${timeToNextTimeSlot}`}</Text>
      </Text>
    </View>
  );
};
