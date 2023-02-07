import React, { FC } from "react";
import { View, Text, Switch } from "react-native";
import tw from "../../lib/tailwind";

export const SwitchItem: FC<{
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  testID?: string;
}> = ({ title, value, onValueChange, testID }) => {
  return (
    <View style={tw`justify-between flex-row`} testID={testID}>
      <Text style={tw`text-xl`}>{title}</Text>
      <Switch
        onValueChange={onValueChange}
        value={value}
        testID={testID + "-switcher"}
      />
    </View>
  );
};
