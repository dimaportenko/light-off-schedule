import "expo-dev-client";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import tw from "./src/lib/tailwind";
import {
  useForegroundListener,
  useForegroundSubscription,
} from "./src/hooks/useForeground";
import { root, StoreProvider } from "./src/store";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StoreProvider value={root}>
          <AppContainer />
        </StoreProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export const AppContainer = () => {
  useForegroundSubscription();

  useForegroundListener(() => {
    root.queue.fetchSchedule();
  });

  return (
    <View style={tw`flex-1`}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
};
