import { TimeSlotType } from "../data/schedule";
import OnIcon from "../../assets/svg/ic_on.svg";
import OffIcon from "../../assets/svg/ic_off.svg";
import MaybeIcon from "../../assets/svg/ic_maybe.svg";
import { SvgProps } from "react-native-svg";
import { TEST_IDS } from "../tests/ids";

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
      return (
        <OnIcon {...props} testID={TEST_IDS.currentSlotStatus.statusIconOn} />
      );
    case "off":
      return (
        <OffIcon {...props} testID={TEST_IDS.currentSlotStatus.statusIconOff} />
      );
    case "maybe":
      return (
        <MaybeIcon
          {...props}
          testID={TEST_IDS.currentSlotStatus.statusIconMaybe}
        />
      );
    default:
      return <OnIcon {...props} />;
  }
};
