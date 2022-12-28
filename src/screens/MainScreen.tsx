import React, { FC } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { CurrentSlotStatus } from "../components/main/CurrentSlotStatus";
import { NextTimeSlotCount } from "../components/main/NextTimeSlotCount";
import { TodayDate } from "../components/main/TodayDate";
import { TodayTimeSlots } from "../components/main/TodayTimeSlots";

// import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { getCurrentWeekdayIndex, WeekdDayIndexType } from "../utils/date";
// import { romeNumberArray } from "../utils/romeNumbers";

type MainScreenProps = {
  reload: () => void;
};

export const MainScreen: FC<MainScreenProps> = ({ reload }) => {
  const queueIndex = 0;
  const weekdayIndex = getCurrentWeekdayIndex();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView
        style={tw`flex-1 p-6`}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={reload} />
        }
      >
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
        {
          // map over the next 7 days
          [0, 1, 2, 3, 4, 5, 6].map((_, index) => {
            const slotWeekdayIndex = ((weekdayIndex + index) %
              7) as WeekdDayIndexType;
            return (
              <View key={index}>
                <TodayTimeSlots
                  queueIndex={queueIndex}
                  weekdayIndex={slotWeekdayIndex}
                />
                <View style={tw`p-4`} />
              </View>
            );
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
};
