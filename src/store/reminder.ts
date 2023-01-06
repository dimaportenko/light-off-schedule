import * as Notifications from "expo-notifications";

import { QueueSchedule } from "../data/schedule";
import { translate } from "../i18n";
import { WeekdDayIndexType } from "../utils/date";

export const prepareNotifiationsInput = (
  queueSchedule: QueueSchedule,
  time: string
) => {
  // convert time format HH:mm to hours and minutes
  const [hours, minutes] = time.split(":").map((x) => parseInt(x, 10));
  const remindInMinutes = hours * 60 + minutes;

  // loop through all days and schedule notifications
  const notificaitonInputs: Notifications.NotificationRequestInput[] = [];
  Object.entries(queueSchedule).forEach(([day, timeSlots]) => {
    timeSlots.forEach((timeSlot, index) => {
      // remove first off slot if it is continue from previous day
      if (index === 0 && timeSlot.type === "off") {
        const previousWeekday = ((parseInt(day, 10) + 6) %
          7) as WeekdDayIndexType;
        const previousTimeSlot = queueSchedule[previousWeekday].slice(-1)[0];
        if (previousTimeSlot.type === "off") {
          return;
        }
      }

      // skip light on slots
      if (timeSlot.type === "on") {
        return;
      }

      const [startHours, startMinutes] = timeSlot.start
        .split(":")
        .map((x) => parseInt(x, 10));
      let diffInMinutes = startHours * 60 + startMinutes - remindInMinutes;
      let weekDay = parseInt(day, 10);
      if (diffInMinutes < 0) {
        diffInMinutes += 24 * 60;
        weekDay = (weekDay + 6) % 7;
      }
      const h = Math.floor(diffInMinutes / 60);
      const m = diffInMinutes % 60;

      notificaitonInputs.push({
        content: {
          title: translate("notifications.title"),
          body: `${translate("notifications.body")} ${timeSlot.start}`,
        },
        trigger: {
          hour: h,
          minute: m,
          repeats: true,
          weekday: weekDay,
        },
      });
    });
  });
  return notificaitonInputs;
};
