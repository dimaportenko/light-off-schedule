import React, { FC } from "react";
import { View, Text, Switch, ViewStyle } from "react-native";
import tw from "../../lib/tailwind";

export const SwitchItem: FC<{
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  testID?: string;
  style?: ViewStyle | undefined;
}> = ({ title, value, onValueChange, testID, style }) => {
  return (
    <View style={tw.style("justify-between flex-row", style)} testID={testID}>
      <Text style={tw`text-xl`}>{title}</Text>
      <Switch
        onValueChange={onValueChange}
        value={value}
        testID={testID + "-switcher"}
      />
    </View>
  );
};
