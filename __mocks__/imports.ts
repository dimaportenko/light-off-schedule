import AsyncStorage from "./libs/AsyncStorage";

jest.mock("react-native-safe-area-context", () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    ...jest.requireActual("react-native-safe-area-context"),
    SafeAreaProvider: jest.fn(({ children }) => children),
    SafeAreaConsumer: jest.fn(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn(() => inset),
    useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 390, height: 844 })),
  };
});

// mock mobx-persist-store makePersistable
jest.mock("mobx-persist-store", () => {
  return {
    ...jest.requireActual("mobx-persist-store"),
    makePersistable: jest.fn((store) => store),
  };
});

jest.doMock("@react-native-async-storage/async-storage", () => {
  return new AsyncStorage();
});
