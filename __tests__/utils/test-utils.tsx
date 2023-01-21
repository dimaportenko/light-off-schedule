import { render } from "@testing-library/react-native";
import { root, StoreProvider } from "../../src/store";

// ---- Date config Start ----
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// add custom parse format plugin
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import tk from "timekeeper";
const startTimestamp = 1487076708000;
const time = new Date(startTimestamp);
tk.freeze(time);

// ---- Date config End ----

const AllTheProviders = ({ children }: { children: any }) => {
  return <StoreProvider value={root}>{children}</StoreProvider>;
};

const customRender: typeof render = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
