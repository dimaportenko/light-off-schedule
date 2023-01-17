import { configurePersistable } from "mobx-persist-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

// All properties are optional
configurePersistable({
  storage: AsyncStorage,
  // expireIn: 86400000,
  // removeOnExpiration: true,
  // stringify: false,
  // debugMode: true,
});
