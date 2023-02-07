const ua = {
  common: {
    in: "через",
    hh: "год.",
    mm: "хв.",

    monday: "Понеділок",
    tuesday: "Вівторок",
    wednesday: "Середа",
    thursday: "Четвер",
    friday: "П'ятниця",
    saturday: "Субота",
    sunday: "Неділя",

    done: "Готово",
  },
  mainScreen: {
    queue: "Черга",
    nextTurnOn: "Наступне включення",
    nextTurnOff: "Наступне вимкнення",

    remindMe: "Нагадати за",
  },
  settingsScreen: {
    title: "Налаштування",

    switchLightSlotOn: "Має бути",
    switchLightSlotOff: "Відключення",
    switchLIghtSlogMaybe: "Можливе відключення",
  },
  notifications: {
    permissionDenied: "Доступ до нагадувань заборонено",
    title: "Розклад вимкнення світла",
    body: "Наступне вимкнення о",
  },
};

export default ua;
export type Translations = typeof ua;
