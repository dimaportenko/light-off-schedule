import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "../../lib/tailwind";
import { TEST_IDS } from "../../tests/ids";
import { IconButton } from "./IconButton";
import { BackIcon } from "./Icons";

const HEADER_HEIGHT = 50;

export const NavHeader: FC<{
  title: string;
}> = ({ title }) => {
  const { top } = useSafeAreaInsets();
  const height = top + HEADER_HEIGHT;
  const { width: screenWidth } = useWindowDimensions();

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={tw`flex h-${height}px w-${screenWidth}px pt-${top}px flex-row items-center`}
      testID={TEST_IDS.common.navHeader.container}
    >
      <IconButton
        style={tw`h-${HEADER_HEIGHT}px w-${HEADER_HEIGHT}px items-center justify-center`}
        testID={TEST_IDS.common.navHeader.backButton}
        onPress={goBack}
        icon={<BackIcon />}
      />
      <Text
        style={tw`text-2xl text-black text-center flex-1 mr-${HEADER_HEIGHT}px`}
      >
        {title}
      </Text>
    </View>
  );
};
