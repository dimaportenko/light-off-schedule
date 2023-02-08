import React, { FC, useRef } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
import { TEST_IDS } from "../tests/ids";
import { IconButton } from "../components/common/IconButton";
import { SettingsIcon } from "../components/common/Icons";
import { MainStackProps } from "../navigation/AppNavigator";
import { routes } from "../navigation/routes";

type MainScreenProps = {} & MainStackProps<typeof routes.main>;

export const MainScreen: FC<MainScreenProps> = observer(({ navigation }) => {
  const { top, bottom } = useSafeAreaInsets();
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

  const goToSettings = () => {
    navigation.navigate(routes.settings);
  };

  return (
    <View style={tw`flex-1 bg-white pt-${top}px`}>
      <ScrollView
        style={tw`flex-1 p-6`}
        contentContainerStyle={{ paddingBottom: bottom }}
        refreshControl={
          <RefreshControl
            refreshing={queue.fetchScheduleStatus === "pending"}
            onRefresh={onRefresh}
          />
        }
      >
        <TouchableOpacity onPress={open}>
          <Text
            style={tw`text-3xl text-black text-center`}
            testID={TEST_IDS.mainScreen.queueTitle}
          >
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

        <IconButton
          icon={<SettingsIcon />}
          onPress={goToSettings}
          style={tw`absolute top-6px right-0`}
          testID={TEST_IDS.mainScreen.settingsButton}
        />
      </ScrollView>

      <QueuePicker
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        ref={queuePickerRef}
      />
    </View>
  );
});
