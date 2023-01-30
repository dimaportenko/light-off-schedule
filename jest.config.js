module.exports = {
  // collectCoverageFrom: ["**/src/**/*.ts", "**/src/**/*.tsx"],
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: ["./__tests__/utils"],
  setupFiles: ["./__mocks__/imports.ts"],
  // setupFilesAfterEnv: [
  //   "@testing-library/jest-native/extend-expect",
  //   "./jest/setup.ts",
  // ],
  // testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    // "**/__api_tests__/**/*.[jt]s?(x)",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
