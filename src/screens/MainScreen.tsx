import React, { FC, useRef } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";

import { CurrentSlotStatus } from "../components/main/CurrentSlotStatus";
import { NextTimeSlotCount } from "../components/main/NextTimeSlotCount";
import { TodayDate } from "../components/main/TodayDate";
import { TodayTimeSlots } from "../components/main/TodayTimeSlots";

import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { getCurrentWeekdayIndex, WeekdDayIndexType } from "../utils/date";
import { romeNumberArray } from "../utils/romeNumbers";
import { useStore } from "../store";
import {
  QueuePicker,
  QueuePickerRefType,
} from "../components/main/QueuePicker";
import { AddRiminder } from "../components/reminder/AddReminder";

type MainScreenProps = {};

export const MainScreen: FC<MainScreenProps> = observer(() => {
  const { top } = useSafeAreaInsets();
  const queuePickerRef = useRef<QueuePickerRefType>(null);
  const { queue } = useStore();
  const [showPicker, setShowPicker] = React.useState(false);
  const weekdayIndex = getCurrentWeekdayIndex();

  const open = () => {
    queuePickerRef.current?.open();
  };

  const onRefresh = () => {
    queue.fetchSchedule();
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView
        style={tw`flex-1 p-6`}
        contentContainerStyle={{ paddingTop: top }}
        refreshControl={
          <RefreshControl
            refreshing={queue.fetchScheduleStatus === "pending"}
            onRefresh={onRefresh}
          />
        }
      >
        <TouchableOpacity onPress={open}>
          <Text style={tw`text-3xl text-black text-center`}>
            {romeNumberArray[queue.selectedQueueIndex] +
              " " +
              translate("mainScreen.queue")}
          </Text>
        </TouchableOpacity>

        <View style={tw`p-4`} />

        <TodayDate />

        <View style={tw`p-4`} />
        <CurrentSlotStatus queueIndex={queue.selectedQueueIndex} />

        <View style={tw`p-4`} />
        <AddRiminder />

        <View style={tw`p-4`} />
        <NextTimeSlotCount queueIndex={queue.selectedQueueIndex} />

        <View style={tw`p-4`} />
        {
          // map over the next 7 days
          [0, 1, 2, 3, 4, 5, 6].map((_, index) => {
            const slotWeekdayIndex = ((weekdayIndex + index) %
              7) as WeekdDayIndexType;
            return (
              <View key={index}>
                <TodayTimeSlots
                  queueIndex={queue.selectedQueueIndex}
                  weekdayIndex={slotWeekdayIndex}
                />
                <View style={tw`p-4`} />
              </View>
            );
          })
        }
      </ScrollView>

      <QueuePicker
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        ref={queuePickerRef}
      />
    </View>
  );
});
