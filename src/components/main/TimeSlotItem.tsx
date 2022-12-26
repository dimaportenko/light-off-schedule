import React, { FC } from "react";
import { View, Text } from "react-native";
import { TimeSlot } from "../../data/schedule";
import tw from "../../lib/tailwind";

type TimeSlotProps = {
  slot: TimeSlot;
};

export const TimeSlotItem: FC<TimeSlotProps> = ({ slot }) => {
  return (
    <View style={tw`flex-row justify-between items-center py-1`}>
      <Text style={tw`text-xl text-black`}>
        {slot.start} - {slot.end}
      </Text>
      <Text style={tw`text-xl text-black`}>
        {/* sun or moon emoji */}
        {slot.type === "on" ? "🌞" : "🌚"}
      </Text>
    </View>
  );
};
