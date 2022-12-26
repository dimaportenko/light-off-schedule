import React, { FC } from "react";
import { View } from "react-native";
import { schedule } from "../../data/schedule";
import { getCurrentWeekdayIndex } from "../../utils/date";
import { TimeSlotItem } from "./TimeSlotItem";

type TodayTimeSlotsProps = {
  queueIndex: number;
};

export const TodayTimeSlots: FC<TodayTimeSlotsProps> = ({ queueIndex }) => {
  const weekdayIndex = getCurrentWeekdayIndex();
  const queueSlots = schedule[queueIndex][weekdayIndex];

  return (
    <View>
      {queueSlots.map((slot, index) => {
        return <TimeSlotItem slot={slot} key={index} />;
      })}
    </View>
  );
};
