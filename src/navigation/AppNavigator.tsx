import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { MainScreen } from "../screens/MainScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { routes } from "./routes";

export type MainStackParamList = {
  [routes.main]: undefined;
  [routes.settings]: undefined;
};

export type MainStackProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.main} component={MainScreen} />
      <Stack.Screen name={routes.settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
