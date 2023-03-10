export type TimeSlotType = "on" | "off" | "maybe";

// dayjs format HH:mm:ss
// const dayjs_object = dayjs("09:00:00", "HH:mm:ss");

export type TimeSlot = {
  start: string;
  end: string;
  type: TimeSlotType;
};

export type DaySchedule = TimeSlot[];

export type QueueSchedule = {
  0: DaySchedule;
  1: DaySchedule;
  2: DaySchedule;
  3: DaySchedule;
  4: DaySchedule;
  5: DaySchedule;
  6: DaySchedule;
};

type Schedule = QueueSchedule[];

// from 0 (Sunday) to 6 (Saturday)
export const schedule: Schedule = [
  // Queue 1
  {
    // Monday
    1: [
      { start: "00:00", end: "01:00", type: "maybe" },
      { start: "01:00", end: "05:00", type: "off" },
      { start: "05:00", end: "09:00", type: "on" },
      { start: "09:00", end: "13:00", type: "maybe" },
      { start: "13:00", end: "17:00", type: "off" },
      { start: "17:00", end: "21:00", type: "on" },
      { start: "21:00", end: "24:00", type: "maybe" },
    ],
    // Tuesday
    2: [
      { start: "00:00", end: "01:00", type: "maybe" },
      { start: "01:00", end: "05:00", type: "on" },
      { start: "05:00", end: "09:00", type: "maybe" },
      { start: "09:00", end: "13:00", type: "off" },
      { start: "13:00", end: "17:00", type: "on" },
      { start: "17:00", end: "21:00", type: "maybe" },
      { start: "21:00", end: "24:00", type: "off" },
    ],
    // Wednesday
    3: [
      { start: "00:00", end: "01:00", type: "off" },
      { start: "01:00", end: "05:00", type: "maybe" },
      { start: "05:00", end: "09:00", type: "off" },
      { start: "09:00", end: "13:00", type: "on" },
      { start: "13:00", end: "17:00", type: "maybe" },
      { start: "17:00", end: "21:00", type: "off" },
      { start: "21:00", end: "24:00", type: "on" },
    ],
    // Thursday
    4: [
      { start: "00:00", end: "01:00", type: "on" },
      { start: "01:00", end: "05:00", type: "off" },
      { start: "05:00", end: "09:00", type: "on" },
      { start: "09:00", end: "13:00", type: "maybe" },
      { start: "13:00", end: "17:00", type: "off" },
      { start: "17:00", end: "21:00", type: "on" },
      { start: "21:00", end: "24:00", type: "maybe" },
    ],
    // Friday
    5: [
      { start: "00:00", end: "01:00", type: "maybe" },
      { start: "01:00", end: "05:00", type: "on" },
      { start: "05:00", end: "09:00", type: "maybe" },
      { start: "09:00", end: "13:00", type: "off" },
      { start: "13:00", end: "17:00", type: "on" },
      { start: "17:00", end: "21:00", type: "maybe" },
      { start: "21:00", end: "24:00", type: "off" },
    ],
    // Saturday
    6: [
      { start: "00:00", end: "01:00", type: "off" },
      { start: "01:00", end: "05:00", type: "maybe" },
      { start: "05:00", end: "09:00", type: "off" },
      { start: "09:00", end: "13:00", type: "on" },
      { start: "13:00", end: "17:00", type: "maybe" },
      { start: "17:00", end: "21:00", type: "off" },
      { start: "21:00", end: "24:00", type: "on" },
    ],
    // Sunday
    0: [
      { start: "00:00", end: "01:00", type: "on" },
      { start: "01:00", end: "05:00", type: "off" },
      { start: "05:00", end: "09:00", type: "on" },
      { start: "09:00", end: "13:00", type: "maybe" },
      { start: "13:00", end: "17:00", type: "off" },
      { start: "17:00", end: "21:00", type: "on" },
      { start: "21:00", end: "24:00", type: "maybe" },
    ],
  },

  // Queue 2
  {
    // Monday
    1: [
      { start: "00:00", end: "01:00", type: "off" },
      { start: "01:00", end: "05:00", type: "on" },
      { start: "05:00", end: "09:00", type: "maybe" },
      { start: "09:00", end: "13:00", type: "off" },
      { start: "13:00", end: "17:00", type: "on" },
      { start: "17:00", end: "21:00", type: "maybe" },
      { start: "21:00", end: "24:00", type: "off" },
    ],
    // Tuesday
    2: [
      { start: "00:00", end: "01:00", type: "off" },
      { start: "01:00", end: "05:00", type: "maybe" },
      { start: "05:00", end: "09:00", type: "off" },
      { start: "09:00", end: "13:00", type: "on" },
      { start: "13:00", end: "17:00", type: "maybe" },
      { start: "17:00", end: "21:00", type: "off" },
      { start: "21:00", end: "24:00", type: "on" },
    ],
    // Wednesday
    3: [
      { start: "00:00", end: "01:00", type: "on" },
      { start: "01:00", end: "05:00", type: "off" },
      { start: "05:00", end: "09:00", type: "on" },
      { start: "09:00", end: "13:00", type: "maybe" },
      { start: "13:00", end: "17:00", type: "off" },
      { start: "17:00", end: "21:00", type: "on" },
      { start: "21:00", end: "24:00", type: "maybe" },
    ],
    // Thursday
    4: [
      { start: "00:00", end: "01:00", type: "maybe" },
      { start: "01:00", end: "05:00", type: "on" },
      { start: "05:00", end: "09:00", type: "maybe" },
      { start: "09:00", end: "13:00", type: "off" },
      { start: "13:00", end: "17:00", type: "on" },
      { start: "17:00", end: "21:00", type: "maybe" },
      { start: "21:00", end: "24:00", type: "off" },
    ],
    // Friday
    5: [
      { start: "00:00", end: "01:00", type: "off" },
      { start: "01:00", end: "05:00", type: "maybe" },
      { start: "05:00", end: "09:00", type: "off" },
      { start: "09:00", end: "13:00", type: "on" },
      { start: "13:00", end: "17:00", type: "maybe" },
      { start: "17:00", end: "21:00", type: "off" },
      { start: "21:00", end: "24:00", type: "on" },
    ],
    // Saturday
    6: [
      { start: "00:00", end: "01:00", type: "on" },
      { start: "01:00", end: "05:00", type: "off" },
      { start: "05:00", end: "09:00", type: "on" },
      { start: "09:00", end: "13:00", type: "maybe" },
      { start: "13:00", end: "17:00", type: "off" },
      { start: "17:00", end: "21:00", type: "on" },
      { start: "21:00", end: "24:00", type: "maybe" },
    ],
    // Sunday
    0: [
      { start: "00:00", end: "01:00", type: "maybe" },
      { start: "01:00", end: "05:00", type: "on" },
      { start: "05:00", end: "09:00", type: "maybe" },
      { start: "09:00", end: "13:00", type: "off" },
      { start: "13:00", end: "17:00", type: "on" },
      { start: "17:00", end: "21:00", type: "maybe" },
      { start: "21:00", end: "24:00", type: "off" },
    ],
  },

  // Queue 3
  {
    // Monday
    1: [
      { start: "00:00", end: "01:00", type: "on" },
      { start: "01:00", end: "05:00", type: "maybe" },
      { start: "05:00", end: "09:00", type: "off" },
      { start: "09:00", end: "13:00", type: "on" },
      { start: "13:00", end: "17:00", type: "maybe" },
      { start: "17:00", end: "21:00", type: "off" },
      { start: "21:00", end: "24:00", type: "on" },
    ],
    // Tuesday
    2: [
      { start: "00:00", end: "01:00", type: "on" },
      { start: "01:00", end: "05:00", type: "off" },
      { start: "05:00", end: "09:00", type: "on" },
      { start: "09:00", end: "13:00", type: "maybe" },
      { start: "13:00", end: "17:00", type: "off" },
      { start: "17:00", end: "21:00", type: "on" },
      { start: "21:00", end: "24:00", type: "maybe" },
    ],
    // Wednesday
    3: [
      { start: "00:00", end: "01:00", type: "maybe" },
      { start: "01:00", end: "05:00", type: "on" },
      { start: "05:00", end: "09:00", type: "maybe" },
      { start: "09:00", end: "13:00", type: "off" },
      { start: "13:00", end: "17:00", type: "on" },
      { start: "17:00", end: "21:00", type: "maybe" },
      { start: "21:00", end: "24:00", type: "off" },
    ],
    // Thursday
    4: [
      { start: "00:00", end: "01:00", type: "off" },
      { start: "01:00", end: "05:00", type: "maybe" },
      { start: "05:00", end: "09:00", type: "off" },
      { start: "09:00", end: "13:00", type: "on" },
      { start: "13:00", end: "17:00", type: "maybe" },
      { start: "17:00", end: "21:00", type: "off" },
      { start: "21:00", end: "24:00", type: "on" },
    ],
    // Friday
    5: [
      { start: "00:00", end: "01:00", type: "on" },
      { start: "01:00", end: "05:00", type: "off" },
      { start: "05:00", end: "09:00", type: "on" },
      { start: "09:00", end: "13:00", type: "maybe" },
      { start: "13:00", end: "17:00", type: "off" },
      { start: "17:00", end: "21:00", type: "on" },
      { start: "21:00", end: "24:00", type: "maybe" },
    ],
    // Saturday
    6: [
      { start: "00:00", end: "01:00", type: "maybe" },
      { start: "01:00", end: "05:00", type: "on" },
      { start: "05:00", end: "09:00", type: "maybe" },
      { start: "09:00", end: "13:00", type: "off" },
      { start: "13:00", end: "17:00", type: "on" },
      { start: "17:00", end: "21:00", type: "maybe" },
      { start: "21:00", end: "24:00", type: "off" },
    ],
    // Sunday
    0: [
      { start: "00:00", end: "01:00", type: "off" },
      { start: "01:00", end: "05:00", type: "maybe" },
      { start: "05:00", end: "09:00", type: "off" },
      { start: "09:00", end: "13:00", type: "on" },
      { start: "13:00", end: "17:00", type: "maybe" },
      { start: "17:00", end: "21:00", type: "off" },
      { start: "21:00", end: "24:00", type: "on" },
    ],
  },
];
