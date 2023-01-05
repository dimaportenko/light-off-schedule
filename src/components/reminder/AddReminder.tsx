import React from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import DateTimePicker from "react-native-modal-datetime-picker";

import tw from "../../lib/tailwind";

import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { translate } from "../../i18n";

export const AddRiminder = observer(() => {
  const { queue } = useStore();
  const [timePickerVisible, setTimePickerVisible] = React.useState(false);

  return (
    <View style={tw`justify-between flex-1 flex-row`}>
      <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
        <Text style={tw`text-xl`}>
          {translate("mainScreen.remindMe")}{" "}
          <Text style={tw`text-xl font-bold`}>{queue.reminderTime}</Text>
        </Text>
      </TouchableOpacity>
      <Switch
        onValueChange={() => queue.setReminderEnabled(!queue.reminderEnabled)}
        value={queue.reminderEnabled}
      />
      <DateTimePicker
        isVisible={timePickerVisible}
        onConfirm={(date) => {
          // convert Date to string HH:mm with dayjs
          const time = dayjs(date).format("HH:mm");
          queue.setReminderTime(time);
          setTimePickerVisible(false);
        }}
        onCancel={() => setTimePickerVisible(false)}
        mode="time"
        // convert string HH:mm to Date with dayjs
        date={dayjs(queue.reminderTime, "HH:mm").toDate()}
      />
    </View>
  );
});
