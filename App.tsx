import "expo-dev-client";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import tw from "./src/lib/tailwind";
import { MainScreen } from "./src/screens/MainScreen";
import {
  useForegroundListener,
  useForegroundSubscription,
} from "./src/hooks/useForeground";
import { root, StoreProvider } from "./src/store";

export default function App() {
  useForegroundSubscription();

  useForegroundListener(() => {
    root.queue.fetchSchedule();
  });

  return (
    <SafeAreaProvider>
      <StoreProvider value={root}>
        <View style={tw`flex-1`}>
          <MainScreen />
          <StatusBar style="auto" />
        </View>
      </StoreProvider>
    </SafeAreaProvider>
  );
}
