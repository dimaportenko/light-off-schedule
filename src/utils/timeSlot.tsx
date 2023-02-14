import { TimeSlotType } from "../data/schedule";
import OnIcon from "../../assets/svg/ic_on.svg";
import OffIcon from "../../assets/svg/ic_off.svg";
import MaybeIcon from "../../assets/svg/ic_maybe.svg";
import { SvgProps } from "react-native-svg";

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

export const getSlotTypeIcon = (type: TimeSlotType, props: SvgProps) => {
  switch (type) {
    case "on":
      return <OnIcon {...props} />;
    case "off":
      return <OffIcon {...props} />;
    case "maybe":
      return <MaybeIcon {...props} />;
    default:
      return <OnIcon {...props} />;
  }
};
