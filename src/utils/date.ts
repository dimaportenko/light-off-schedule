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
