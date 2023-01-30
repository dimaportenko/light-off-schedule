import { TimeSlotType } from "../data/schedule";

// export const getSlotTypeEmoji = (type: TimeSlotType) => {
//   switch (type) {
//     case "on":
//       return "👍";
//     case "off":
//       return "👎";
//     case "maybe":
//       return "👀";
//     default:
//       return "🌕";
//   }
// };

export const getSlotTypeEmoji = (type: TimeSlotType) => {
  switch (type) {
    case "on":
      return "🌕";
    case "off":
      return "🌑";
    case "maybe":
      return "🌗";
    default:
      return "🌕";
  }
};
