import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import tw from "./src/lib/tailwind";
import { translate } from "./src/i18n";

const romeNumberArray = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];

export const MainScreen = () => {
  const queueIndex = 0;
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-4xl text-black text-center`}>
          {romeNumberArray[queueIndex] +
            " " +
            translate("mainScreen.queue").toUpperCase()}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <View style={tw`flex-1`}>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}
