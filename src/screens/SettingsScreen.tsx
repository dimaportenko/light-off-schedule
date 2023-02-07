import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { View } from "react-native";
import { NavHeader } from "../components/common/NavHeader";
import { SwitchItem } from "../components/common/SwitchItem";
import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { MainStackProps } from "../navigation/AppNavigator";
import { routes } from "../navigation/routes";
import { useStore } from "../store";
import { TEST_IDS } from "../tests/ids";

type SettingsScreenProps = {} & MainStackProps<typeof routes.settings>;

export const SettingsScreen: FC<SettingsScreenProps> = observer(() => {
  const { settings } = useStore();

  return (
    <View style={tw`flex-1 bg-white`} testID={TEST_IDS.settingsScreen.screen}>
      <NavHeader title={translate("settingsScreen.title")} />
      {/* <Text>{translate("settingsScreen.title")}</Text> */}
      {/* spacer */}
      <View style={tw`p-4`}>
        <View style={tw`h-6`} />
        <SwitchItem
          testID={TEST_IDS.settingsScreen.switchLightSlotOn}
          title={translate("settingsScreen.switchLightSlotOn")}
          value={settings.slotsEnabled.on}
          onValueChange={(value) => {
            settings.setSlotEnabled("on", value);
          }}
        />

        <View style={tw`h-2`} />
        <SwitchItem
          testID={TEST_IDS.settingsScreen.switchLightSlotOff}
          title={translate("settingsScreen.switchLightSlotOff")}
          value={settings.slotsEnabled.off}
          onValueChange={(value) => {
            settings.setSlotEnabled("off", value);
          }}
        />

        <View style={tw`h-2`} />
        <SwitchItem
          testID={TEST_IDS.settingsScreen.switchLightSlotMaybe}
          title={translate("settingsScreen.switchLIghtSlogMaybe")}
          value={settings.slotsEnabled.maybe}
          onValueChange={(value) => {
            settings.setSlotEnabled("maybe", value);
          }}
        />
      </View>
    </View>
  );
});
