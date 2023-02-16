import React, { FC } from "react";
import { View, Text, Switch, ViewStyle } from "react-native";
import tw from "../../lib/tailwind";

export const SwitchItem: FC<{
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  testID?: string;
  style?: ViewStyle | undefined;
  icon?: React.ReactNode;
}> = ({ title, value, onValueChange, testID, style, icon }) => {
  return (
    <View
      style={tw.style("items-center justify-between flex-row", style)}
      testID={testID}
    >
      <View style={tw`flex-row`}>
        {icon}
        {icon && <View style={tw`w-2`} />}
        <Text style={tw`text-xl`}>{title}</Text>
      </View>
      <Switch
        onValueChange={onValueChange}
        value={value}
        testID={testID + "-switcher"}
      />
    </View>
  );
};
