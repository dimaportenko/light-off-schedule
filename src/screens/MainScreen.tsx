import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TodayDate } from "../components/main/TodayDate";

import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { romeNumberArray } from "../utils/romeNumbers";

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
