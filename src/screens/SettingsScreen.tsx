import React, { FC } from "react";
import { View } from "react-native";
import { NavHeader } from "../components/common/NavHeader";
import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { MainStackProps } from "../navigation/AppNavigator";
import { routes } from "../navigation/routes";
import { TEST_IDS } from "../tests/ids";

type SettingsScreenProps = {} & MainStackProps<typeof routes.settings>;

export const SettingsScreen: FC<SettingsScreenProps> = () => {
  return (
    <View style={tw`flex-1 bg-white`} testID={TEST_IDS.settingsScreen.screen}>
      <NavHeader title={translate("settingsScreen.title")} />
      {/* <Text>{translate("settingsScreen.title")}</Text> */}
    </View>
  );
};
