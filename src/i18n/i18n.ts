import * as Localization from "expo-localization";
import i18n from "i18n-js";

import dayjs from "dayjs";

// if English isn't your default language, move Translations to the appropriate language file.
import en from "./en";
import ua, { Translations } from "./ua";

if (Localization.locale.includes("US")) {
  require("dayjs/locale/en");
  dayjs.locale("en");
} else {
  require("dayjs/locale/uk");
  dayjs.locale("uk");
}
// TODO: hardcode ua locale
require("dayjs/locale/uk");
dayjs.locale("uk");

i18n.fallbacks = true;
/**
 * we need always include "*-US" for some valid language codes because when you change the system language,
 * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
 * if you change to another language and then return to English language code is now "en-US".
 */
i18n.translations = {
  ua,
  en,
  "en-US": en,
  "en-UA": ua,
  "uk-UA": ua,
  "uk-US": ua,
};

i18n.locale = Localization.locale;
// TODO: hardcode ua locale
i18n.locale = "uk-UA";
i18n.defaultLocale = "uk-UA";

// handle RTL languages
// export const isRTL = Localization.isRTL;
// I18nManager.allowRTL(isRTL);
// I18nManager.forceRTL(isRTL);

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<Translations>;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string
> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;
