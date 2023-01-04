import React from "react";
import { View, Text, Switch } from "react-native";

import tw from "../../lib/tailwind";

import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { translate } from "../../i18n";

export const AddRiminder = observer(() => {
  const { queue } = useStore();
  return (
    <View style={tw`justify-between flex-1 flex-row`}>
      <Text style={tw`text-xl`}>{translate("mainScreen.remindMe")}</Text>
      <Switch
        onValueChange={() => queue.setReminderEnabled(!queue.reminderEnabled)}
        value={queue.reminderEnabled}
      />
    </View>
  );
});
