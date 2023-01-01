import React, { FC } from "react";
import { View, Text } from "react-native";
import { getWeekdayTitle, WeekdDayIndexType } from "../../utils/date";
import { TimeSlotItem } from "./TimeSlotItem";
import tw from "../../lib/tailwind";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";

type TodayTimeSlotsProps = {
  queueIndex: number;
  weekdayIndex: WeekdDayIndexType;
};

export const TodayTimeSlots: FC<TodayTimeSlotsProps> = observer(
  ({ queueIndex, weekdayIndex }) => {
    const { queue } = useStore();
    const queueSlots = queue.schedule[queueIndex][weekdayIndex];

    let lastSlotEndTime: string | undefined;
    const lastTimeSlot = queueSlots[queueSlots.length - 1];
    if (lastTimeSlot.type === "off") {
      const tomorrowIndex = ((weekdayIndex + 1) % 7) as WeekdDayIndexType;
      const firstTomorrowSlot = queue.schedule[queueIndex][tomorrowIndex][0];
      if (firstTomorrowSlot.type === "off") {
        lastSlotEndTime = firstTomorrowSlot.end;
      }
    }

    return (
      <View>
        <Text style={tw`text-2xl text-center`}>
          {getWeekdayTitle(weekdayIndex)}
        </Text>
        <View style={tw`pb-1`} />
        <View>
          {queueSlots
            .filter((slot) => slot.type === "off")
            .map((slot, index, slots) => {
              return (
                <TimeSlotItem
                  slot={slot}
                  key={index}
                  lastSlotEndTime={
                    index === slots.length - 1 ? lastSlotEndTime : undefined
                  }
                />
              );
            })}
        </View>
      </View>
    );
  }
);
