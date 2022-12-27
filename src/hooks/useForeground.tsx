import { AppState, AppStateStatus, DeviceEventEmitter } from "react-native";
import { useEffect, useState } from "react";

const FOREGROUND_EVENT = "TRACK_FOREGROUND_EVENT";

export const useForegroundSubscription = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    function handleAppStateChange(nextAppState: AppStateStatus) {
      if (nextAppState === "active" && appState !== "active") {
        DeviceEventEmitter.emit(FOREGROUND_EVENT, appState);
      }
      setAppState(nextAppState);
    }
    const _appState = AppState.addEventListener("change", handleAppStateChange);

    return () => _appState.remove();
  }, [appState]);

  return { appState };
};

export const useForegroundListener = (callback: () => void) => {
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(FOREGROUND_EVENT, () =>
      callback()
    );
    return () => subscription.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
