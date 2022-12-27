import dayjs from "dayjs";
import { translate } from "../i18n";
import {
  uppercaseFirstLetter,
  uppercaseFirstLetterOfLastWord,
} from "./strings";

export const getCurrentDayTitle = () => {
  let title = dayjs().format("dddd, DD MMMM");
  title = uppercaseFirstLetter(title);
  title = uppercaseFirstLetterOfLastWord(title);
  return title;
};

export type WeekdDayIndexType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export const getCurrentWeekdayIndex = (): WeekdDayIndexType => {
  return dayjs().day() as WeekdDayIndexType;
};

export const getWeekdayTitle = (index: WeekdDayIndexType) => {
  switch (index) {
    case 0:
      return translate("common.sunday");
    case 1:
      return translate("common.monday");
    case 2:
      return translate("common.tuesday");
    case 3:
      return translate("common.wednesday");
    case 4:
      return translate("common.thursday");
    case 5:
      return translate("common.friday");
    case 6:
      return translate("common.saturday");
  }
};

export const nextWillBeInLabel = (time: string, inDays = 0) => {
  const nextSlotTimeDayjs = dayjs(time, "HH:mm").add(inDays, "day");
  const now = dayjs();
  const hours = nextSlotTimeDayjs.diff(now, "h");
  const minutes = nextSlotTimeDayjs.diff(now, "m") % 60;

  if (hours === 0) {
    return (
      translate("common.in") + " " + minutes + " " + translate("common.mm")
    );
  }

  return (
    translate("common.in") +
    " " +
    hours +
    " " +
    translate("common.hh") +
    " " +
    minutes +
    " " +
    translate("common.mm")
  );
};
