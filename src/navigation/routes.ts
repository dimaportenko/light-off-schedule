export const routes = {
  main: "MainScreen",
  settings: "SettingsScreen",
} as const;

export type RouteKeys = keyof typeof routes;
export type RouteValues = typeof routes[RouteKeys]; //  "myValue1" | "myValue2"
