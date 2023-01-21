import { render } from "@testing-library/react-native";
import { root, StoreProvider } from "../../src/store";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// add custom parse format plugin
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const AllTheProviders = ({ children }: { children: any }) => {
  return <StoreProvider value={root}>{children}</StoreProvider>;
};

const customRender: typeof render = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
