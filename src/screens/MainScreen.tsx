import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CurrentSlotStatus } from "../components/main/CurrentSlotStatus";
import { NextTimeSlotCount } from "../components/main/NextTimeSlotCount";
import { TodayDate } from "../components/main/TodayDate";
import { TodayTimeSlots } from "../components/main/TodayTimeSlots";

// import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { getCurrentWeekdayIndex, WeekdDayIndexType } from "../utils/date";
// import { romeNumberArray } from "../utils/romeNumbers";

export const MainScreen = () => {
  const queueIndex = 0;
  const weekdayIndex = getCurrentWeekdayIndex();
  const tomorrowWeekdayIndex = ((weekdayIndex + 1) % 7) as WeekdDayIndexType;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 p-6`}>
        <Text style={tw`text-3xl text-black text-center`}>
          {/* {romeNumberArray[queueIndex] + " " + translate("mainScreen.queue")} */}
        </Text>

        <View style={tw`p-4`} />

        <TodayDate />

        <View style={tw`p-4`} />

        <CurrentSlotStatus queueIndex={queueIndex} />

        <View style={tw`p-4`} />

        <NextTimeSlotCount queueIndex={queueIndex} />

        <View style={tw`p-8`} />
        <TodayTimeSlots queueIndex={queueIndex} weekdayIndex={weekdayIndex} />

        <View style={tw`p-4`} />
        <TodayTimeSlots
          queueIndex={queueIndex}
          weekdayIndex={tomorrowWeekdayIndex}
        />
      </View>
    </SafeAreaView>
  );
};
