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
    background: "#0A0A0A",
    modalBackground: "#121212",
    card: "#1F1F1F",
    surface: "#292929",
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
    background: "#FFFFFF",
    modalBackground: "rgb(255, 255, 255)",
    card: "#F5F5F5",
    surface: "#EBEBEB",
    text: "rgb(0, 0, 0)",
    subtext: "rgb(102, 102, 102)",
    separator: "rgb(194, 194, 195)",
    highlight: "rgb(199, 198, 203)",
  },
};
