import { translate } from "../i18n";
import { romeNumberArray } from "./romeNumbers";

export const queueTitleByIndex = (index: number) => {
  return romeNumberArray[index] + " " + translate("mainScreen.queue");
};
