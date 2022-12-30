import React, { FC, useRef } from "react";
import {
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
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

type MainScreenProps = {
  reload: () => void;
};

export const queueTitleByIndex = (index: number) => {
  return romeNumberArray[index] + " " + translate("mainScreen.queue");
};

export const MainScreen: FC<MainScreenProps> = observer(({ reload }) => {
  const { queue } = useStore();
  const [showPicker, setShowPicker] = React.useState(false);
  const weekdayIndex = getCurrentWeekdayIndex();

  const pickerRef = useRef<Picker<number>>(null);

  const open = () => {
    if (Platform.OS === "ios") {
      setShowPicker(true);
    } else {
      pickerRef.current?.focus();
    }
  };

  const close = () => {
    if (Platform.OS === "ios") {
      setShowPicker(false);
    } else {
      pickerRef.current?.blur();
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView
        style={tw`flex-1 p-6`}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={reload} />
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

        <NextTimeSlotCount queueIndex={queue.selectedQueueIndex} />

        <View style={tw`p-8`} />
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

      {(Platform.OS === "android" || showPicker) && (
        <View style={tw`absolute bottom-0 bg-gray-100 w-100% android:h-0px`}>
          <View
            style={tw` h-50px border-t border-gray-300 items-end justify-center bg-white`}
          >
            <TouchableOpacity
              onPress={close}
              style={tw`h-50px pr-4 justify-center`}
            >
              <Text style={tw`text-center text-blue-500 text-xl`}>
                {translate("common.done")}
              </Text>
            </TouchableOpacity>
          </View>
          <Picker
            ref={pickerRef}
            selectedValue={queue.selectedQueueIndex}
            onValueChange={(itemValue) => {
              queue.setSelectedQueueIndex(itemValue);
            }}
          >
            <Picker.Item label={queueTitleByIndex(0)} value={0} />
            <Picker.Item label={queueTitleByIndex(1)} value={1} />
            <Picker.Item label={queueTitleByIndex(2)} value={2} />
          </Picker>
        </View>
      )}
    </SafeAreaView>
  );
});
