import React from "react";
import { Image } from "react-native";
import tw from "../../lib/tailwind";
import { TEST_IDS } from "../../tests/ids";

export const icons = {
  settings: require("../../../assets/icons/settings-round-24px.png"),
};

export type IconTypes = keyof typeof icons;

export const SettingsIcon = () => (
  <Image
    testID={TEST_IDS.icons.settings}
    source={icons.settings}
    style={tw`w-30px h-30px`}
    resizeMode="contain"
  />
);
