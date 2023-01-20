import AsyncStorage from "./libs/AsyncStorage";

jest.doMock("@react-native-async-storage/async-storage", () => {
  return new AsyncStorage();
});
