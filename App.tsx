import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import tw from "./src/lib/tailwind";
import { MainScreen } from "./src/screens/MainScreen";
import {
  useForegroundListener,
  useForegroundSubscription,
} from "./src/hooks/useForeground";

export default function App() {
  const [_, setLoading] = React.useState(false);

  useForegroundSubscription();

  useForegroundListener(() => {
    setLoading(true);
  });

  // if (loading) {
  //   return (
  //     <View style={tw`flex-1 bg-white justify-center items-center`}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <View style={tw`flex-1`}>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}
