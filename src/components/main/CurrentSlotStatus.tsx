import { FC } from "react";
import dayjs from "dayjs";
import { getCurrentWeekdayIndex } from "../../utils/date";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { TEST_IDS } from "../../tests/ids";
import { getSlotTypeIcon } from "../../utils/timeSlot";
import { View } from "react-native";
import tw from "../../lib/tailwind";

type CurrentSlotStatusProps = {
  queueIndex: number;
};

export const CurrentSlotStatus: FC<CurrentSlotStatusProps> = observer(
  ({ queueIndex }) => {
    const { queue } = useStore();
    // get the current weekday index
    const weekdayIndex = getCurrentWeekdayIndex();
    // get time slots for the current weekday
    const queueSlots = queue.schedule[queueIndex][weekdayIndex];
    // today dayjs object with start time
    // get the next time slot
    const nextTimeSlot = queueSlots.find((slot) => {
      const startTime = dayjs(slot.start, "HH:mm");
      const endTime = dayjs(slot.end, "HH:mm");

      return startTime.isBefore(dayjs()) && endTime.isAfter(dayjs());
    });

    if (!nextTimeSlot) {
      return null;
    }

    return (
      <View style={tw`flex-row items-center justify-center`}>
        {getSlotTypeIcon(nextTimeSlot.type, {
          width: 40,
          height: 40,
          testID: TEST_IDS.currentSlotStatus.statusEmoji,
        })}
      </View>
    );
  }
);
