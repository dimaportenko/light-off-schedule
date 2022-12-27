import dayjs from "dayjs";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { TimeSlot } from "../../data/schedule";
import tw from "../../lib/tailwind";

type TimeSlotProps = {
  slot: TimeSlot;
  lastSlotEndTime?: string;
};

export const TimeSlotItem: FC<TimeSlotProps> = ({ slot, lastSlotEndTime }) => {
  return (
    <View style={tw`flex-row justify-between items-center py-1`}>
      <Text style={tw`text-xl text-black`}>
        {dayjs(slot.start, "HH:mm").format("H:mm")} -{" "}
        {dayjs(lastSlotEndTime || slot.end, "HH:mm").format("H:mm")}
      </Text>
      <Text style={tw`text-xl text-black`}>
        {/* sun or moon emoji */}
        {slot.type === "on" ? "🌞" : "🌚"}
      </Text>
    </View>
  );
};
