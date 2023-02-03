import React, { forwardRef, useRef } from "react";
import { Platform, TouchableOpacity, View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { Picker } from "@react-native-picker/picker";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

import tw from "../../lib/tailwind";
import { translate } from "../../i18n";
import { useStore } from "../../store";
import { queueTitleByIndex } from "../../utils/queue";

type QueuePickerItemProps = {
  showPicker: boolean;
  setShowPicker: (show: boolean) => void;
};

export type QueuePickerRefType = {
  open: () => void;
};

export const QueuePicker = observer<QueuePickerItemProps, QueuePickerRefType>(
  forwardRef(({ setShowPicker, showPicker }, ref) => {
    const pickerRef = useRef<Picker<number>>(null);
    const { queue } = useStore();

    React.useImperativeHandle(ref, () => ({
      open,
    }));

    const open = () => {
      if (Platform.OS === "ios") {
        setShowPicker(true);
      } else {
        pickerRef.current?.focus();
      }
    };

    const close = () => {
      if (Platform.OS === "ios") {
        setShowPicker(false);
      } else {
        pickerRef.current?.blur();
      }
    };

    const picker = () => {
      return (
        <Picker
          ref={pickerRef}
          selectedValue={queue.selectedQueueIndex}
          onValueChange={(itemValue) => {
            queue.setSelectedQueueIndex(itemValue);
          }}
        >
          {queue.schedule.map((_, index) => (
            <Picker.Item
              label={queueTitleByIndex(index)}
              value={index}
              key={queueTitleByIndex(index)}
            />
          ))}
        </Picker>
      );
    };

    const renderPicker = () => {
      if (Platform.OS === "ios" && showPicker) {
        return (
          <Animated.View
            entering={SlideInDown}
            exiting={SlideOutDown}
            style={tw`absolute bottom-0 bg-gray-100 w-100% android:h-0px`}
          >
            <View
              style={tw` h-50px border-t border-gray-300 items-end justify-center bg-white`}
            >
              <TouchableOpacity
                onPress={close}
                style={tw`h-50px pr-4 justify-center`}
              >
                <Text style={tw`text-center text-blue-500 text-xl`}>
                  {translate("common.done")}
                </Text>
              </TouchableOpacity>
            </View>
            {picker()}
          </Animated.View>
        );
      }

      if (Platform.OS === "android") {
        return <View style={tw`opacity-0 h-0`}>{picker()}</View>;
      }

      return null;
    };

    return renderPicker();
  })
);
