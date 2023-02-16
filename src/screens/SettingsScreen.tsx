import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { NavHeader } from "../components/common/NavHeader";
import { SwitchItem } from "../components/common/SwitchItem";
import { translate } from "../i18n";
import tw from "../lib/tailwind";
import { MainStackProps } from "../navigation/AppNavigator";
import { routes } from "../navigation/routes";
import { useStore } from "../store";
import { TEST_IDS } from "../tests/ids";
import { getSlotTypeEmoji, getSlotTypeIcon } from "../utils/timeSlot";

type SettingsScreenProps = {} & MainStackProps<typeof routes.settings>;

const Separator = () => <View style={tw`h-1px my-2 bg-gray-300`} />;

const iconProps = {
  width: 24,
  height: 24,
};

export const SettingsScreen: FC<SettingsScreenProps> = observer(() => {
  const { settings } = useStore();

  return (
    <View
      style={tw`flex-1 bg-gray-200`}
      testID={TEST_IDS.settingsScreen.screen}
    >
      <NavHeader title={translate("settingsScreen.title")} />
      {/* <Text>{translate("settingsScreen.title")}</Text> */}
      {/* spacer */}
      <View style={tw`p-4`}>
        <View style={tw`h-6`} />
        <View style={tw`bg-white p-4 rounded-2`}>
          <Text style={tw`text-xl font-bold`}>
            {translate("settingsScreen.switchLightSlotTitle")}
          </Text>
          <Separator />

          <SwitchItem
            testID={TEST_IDS.settingsScreen.switchLightSlotOn}
            icon={getSlotTypeIcon("on", iconProps)}
            title={translate("settingsScreen.switchLightSlotOn")}
            value={settings.slotsEnabled.on}
            onValueChange={(value) => {
              settings.setSlotEnabled("on", value);
            }}
          />

          <Separator />
          <SwitchItem
            testID={TEST_IDS.settingsScreen.switchLightSlotOff}
            icon={getSlotTypeIcon("off", iconProps)}
            title={translate("settingsScreen.switchLightSlotOff")}
            value={settings.slotsEnabled.off}
            onValueChange={(value) => {
              settings.setSlotEnabled("off", value);
            }}
          />

          <Separator />
          <SwitchItem
            testID={TEST_IDS.settingsScreen.switchLightSlotMaybe}
            icon={getSlotTypeIcon("maybe", iconProps)}
            title={translate("settingsScreen.switchLIghtSlogMaybe")}
            value={settings.slotsEnabled.maybe}
            onValueChange={(value) => {
              settings.setSlotEnabled("maybe", value);
            }}
          />
        </View>
      </View>
    </View>
  );
});
