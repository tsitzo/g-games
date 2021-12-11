import { ExtendedTheme } from "@react-navigation/native";
import React, { FC, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CustomDarkTheme, CustomLightTheme } from "../theme";

export type ThemeContextState = {
  isDarkTheme: boolean;
  theme: ExtendedTheme;
  switchTheme: () => void;
};

const contextDefaultValue: ThemeContextState = {
  isDarkTheme: true,
  theme: CustomDarkTheme,
  switchTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextState>(contextDefaultValue);

export const ThemeContextProvider: FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    contextDefaultValue.isDarkTheme
  );

  const theme: ExtendedTheme = isDarkTheme ? CustomDarkTheme : CustomLightTheme;

  const switchTheme = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  const saveTheme = async (value: boolean) => {
    try {
      const jsonValue = value === true ? "true" : "false";
      await AsyncStorage.setItem("@GGames/theme", jsonValue);
    } catch (error) {}
  };

  const loadTheme = async () => {
    try {
      const value = await AsyncStorage.getItem("@GGames/theme");

      if (value === "true") {
        setIsDarkTheme(true);
      } else if (value === "false") {
        setIsDarkTheme(false);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  useEffect(() => {
    saveTheme(isDarkTheme!);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
