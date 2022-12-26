import dayjs from "dayjs";
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

type WeekdDayIndexType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export const getCurrentWeekdayIndex = (): WeekdDayIndexType => {
  return dayjs().day() as WeekdDayIndexType;
};
