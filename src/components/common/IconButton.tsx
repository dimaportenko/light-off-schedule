import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type IconButtonProps = TouchableOpacityProps & {
  icon: React.ReactNode;
};

const HIT_SLOP = {
  top: 15,
  bottom: 15,
  left: 15,
  right: 15,
};

export const IconButton: FC<IconButtonProps> = ({
  icon,
  style,
  ...rest
}: IconButtonProps) => {
  return (
    <TouchableOpacity style={style} {...rest} hitSlop={HIT_SLOP}>
      {icon}
    </TouchableOpacity>
  );
};
