import dayjs from "dayjs";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { TimeSlot, TimeSlotType } from "../../data/schedule";
import tw from "../../lib/tailwind";
import { TEST_IDS } from "../../tests/ids";
import { colorForSlotType } from "../../utils/slot";
import { getSlotTypeEmoji } from "../../utils/timeSlot";

type TimeSlotProps = {
  slot: TimeSlot;
  lastSlotEndTime?: string;
};

const getSlotTypeTestID = (type: TimeSlotType) => {
  switch (type) {
    case "on":
      return TEST_IDS.mainScreen.todayTimeSlots.on;
    case "off":
      return TEST_IDS.mainScreen.todayTimeSlots.off;
    case "maybe":
      return TEST_IDS.mainScreen.todayTimeSlots.maybe;
  }
};

export const TimeSlotItem: FC<TimeSlotProps> = ({ slot, lastSlotEndTime }) => {
  return (
    <View
      testID={getSlotTypeTestID(slot.type)}
      style={tw`flex-row justify-between items-center py-[8px] px-3 
                border-b border-gray-300
                ${colorForSlotType(slot.type)}
            `}
    >
      <Text style={tw`text-xl text-gray-500`}>
        {dayjs(slot.start, "HH:mm").format("H:mm")} -{" "}
        {dayjs(lastSlotEndTime || slot.end, "HH:mm").format("H:mm")}
      </Text>
      <Text style={tw`text-xl text-black opacity-90`}>
        {getSlotTypeEmoji(slot.type)}
      </Text>
    </View>
  );
};
