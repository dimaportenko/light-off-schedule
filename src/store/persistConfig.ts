import { configurePersistable } from "mobx-persist-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

// All properties are optional
configurePersistable({
  storage: AsyncStorage,
  // removeOnExpiration: true,
  // expireIn: 86400000,
  // stringify: false,
  // debugMode: true,
});
