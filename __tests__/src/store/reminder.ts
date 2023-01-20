import { schedule } from "../../../src/data/schedule";
import { prepareNotifiationsInput } from "../../../src/store/reminder";

describe("schedule reminder notification", () => {
  test("prepare notification inputs`", () => {
    const queueSchedule = schedule[2];

    const notificationInputs = prepareNotifiationsInput(queueSchedule, "00:15");

    expect(notificationInputs).toMatchInlineSnapshot(`
      Array [
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 05:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 4,
            "minute": 45,
            "repeats": true,
            "weekday": 1,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 17:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 16,
            "minute": 45,
            "repeats": true,
            "weekday": 1,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 05:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 4,
            "minute": 45,
            "repeats": true,
            "weekday": 2,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 17:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 16,
            "minute": 45,
            "repeats": true,
            "weekday": 2,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 01:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 0,
            "minute": 45,
            "repeats": true,
            "weekday": 3,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 13:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 12,
            "minute": 45,
            "repeats": true,
            "weekday": 3,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 09:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 8,
            "minute": 45,
            "repeats": true,
            "weekday": 4,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 21:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 20,
            "minute": 45,
            "repeats": true,
            "weekday": 4,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 05:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 4,
            "minute": 45,
            "repeats": true,
            "weekday": 5,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 17:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 16,
            "minute": 45,
            "repeats": true,
            "weekday": 5,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 01:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 0,
            "minute": 45,
            "repeats": true,
            "weekday": 6,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 13:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 12,
            "minute": 45,
            "repeats": true,
            "weekday": 6,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 09:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 8,
            "minute": 45,
            "repeats": true,
            "weekday": 7,
          },
        },
        Object {
          "content": Object {
            "body": "Наступне вимкнення о 21:00",
            "sound": true,
            "title": "Розклад вимкнення світла",
          },
          "trigger": Object {
            "hour": 20,
            "minute": 45,
            "repeats": true,
            "weekday": 7,
          },
        },
      ]
    `);
  });
});
