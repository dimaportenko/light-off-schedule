import React, { FC } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";

type Props = {
  isVisible: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
};

export const ReminderTimePicker: FC<Props> = ({
  isVisible,
  onCancel,
  onConfirm,
}) => {
  return (
    <DateTimePicker
      isVisible={isVisible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      mode="time"
      date={new Date()}
    />
  );
};
