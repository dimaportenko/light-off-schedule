import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { root, StoreProvider } from "../../src/store";

// ---- Date config Start ----
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// add custom parse format plugin
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
// ---- Date config End ----

const AllTheProviders = ({ children }: { children: any }) => {
  return (
    <NavigationContainer>
      <StoreProvider value={root}>{children}</StoreProvider>;
    </NavigationContainer>
  );
};

const customRender: typeof render = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
