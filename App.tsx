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
  const [loading, setLoading] = React.useState(false);

  useForegroundSubscription();

  const reload = () => {
    setLoading(!loading);
  };

  useForegroundListener(() => {
    reload();
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
      <MainScreen reload={reload} />
      <StatusBar style="auto" />
    </View>
  );
}
