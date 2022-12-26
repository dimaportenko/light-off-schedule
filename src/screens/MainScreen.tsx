import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import dayjs from "dayjs";

import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { romeNumberArray } from "../utils/romeNumbers";

export const TodayDate = () => {
  return (
    <>
      {/* Uppercase first later */}
      <Text style={tw`text-2xl text-black text-center`}>
        {dayjs().format("dddd, DD MMMM")}
      </Text>
      <View style={tw`p-1`} />
      <Text style={tw`text-3xl text-black text-center`}>
        {dayjs().format("HH:mm")}
      </Text>
    </>
  );
};

export const MainScreen = () => {
  const queueIndex = 0;
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-3xl text-black text-center`}>
          {romeNumberArray[queueIndex] + " " + translate("mainScreen.queue")}
        </Text>

        <View style={tw`p-4`} />

        <TodayDate />
      </View>
    </SafeAreaView>
  );
};
