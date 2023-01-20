import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";
import { root } from ".";

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
          sound: true,
        },
        trigger: {
          hour: h,
          minute: m,
          repeats: true,
          weekday: weekDay + 1,
        },
      });
    });
  });
  return notificaitonInputs;
};

export const requestNotificationPermissions = async () => {
  if (Platform.OS === "android") {
    try {
      await Notifications.setNotificationChannelAsync("default", {
        name: "Reminders",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    } catch (error: any) {
      console.log("Error", error);
    }
  }

  const { status } = await Notifications.requestPermissionsAsync();
  return status;
};

export const scheduleLocalWeeklyNotifications = async (
  queueSchedule: QueueSchedule,
  time: string
) => {
  // request permissions
  const status = await requestNotificationPermissions();
  if (status !== "granted") {
    console.log("status", status);
    Alert.alert(translate("notifications.permissionDenied"));

    root.reminder.setReminderEnabled(false);

    return;
  }

  // cancel all notifications
  await Notifications.cancelAllScheduledNotificationsAsync();

  // prepare notifications
  const notificaitonInputs = prepareNotifiationsInput(queueSchedule, time);

  // schedule notifications
  notificaitonInputs.forEach((input) => {
    Notifications.scheduleNotificationAsync(input)
      .then((id) => {
        console.log("Scheduled notification with id: ", id);
      })
      .catch((error) => {
        console.warn(input, error);
      });
  });
};
