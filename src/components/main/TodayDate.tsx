import dayjs from "dayjs";
import React from "react";
import { Text, View } from "react-native";
import tw from "../../lib/tailwind";
import { getCurrentDayTitle } from "../../utils/date";

export const TodayDate = () => {
  return (
    <>
      <Text style={tw`text-2xl text-black text-center`}>
        {getCurrentDayTitle()}
      </Text>
      <View style={tw`p-1`} />
      <Text style={tw`text-3xl text-black text-center`}>
        {dayjs().format("HH:mm")}
      </Text>
    </>
  );
};
