import { TimeSlotType } from "../data/schedule";

export const colorForSlotType = (type: TimeSlotType) => {
  switch (type) {
    case "on":
      return "bg-green-100";
    case "off":
      return "bg-red-100";
    case "maybe":
      return "bg-gray-100";

    default:
      return "bg-gray-100";
  }
};
