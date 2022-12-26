import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import tw from "./src/lib/tailwind";
import { MainScreen } from "./src/screens/MainScreen";

export default function App() {
  return (
    <View style={tw`flex-1`}>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}
