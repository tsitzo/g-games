import {
  DarkTheme,
  DefaultTheme,
  ExtendedTheme,
} from "@react-navigation/native";

export const CustomDarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#FF5722",
    secondary: "rgb(0, 174, 239)",
    tertiary: "rgb(34, 31, 114)",
    danger: "#BF1A2F",
    background: "#121212",
    modalBackground: "#1F1F1F",
    card: "#292929",
    surface: "#333333",
    text: "#FAFAFA",
    subtext: "#989899",
    separator: "rgb(194, 194, 195)",
    highlight: "#018E42",
  },
};

export const CustomLightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF5722",
    secondary: "rgb(0, 174, 239)",
    tertiary: "rgb(34, 31, 114)",
    danger: "rgb(208, 2, 27)",
    background: "#f6f6f6",
    modalBackground: "rgb(255, 255, 255)",
    card: "#E1E1E1",
    surface: "rgb(255, 255, 255)",
    text: "rgb(0, 0, 0)",
    subtext: "rgb(102, 102, 102)",
    separator: "rgb(194, 194, 195)",
    highlight: "rgb(199, 198, 203)",
  },
};
