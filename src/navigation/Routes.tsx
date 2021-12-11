import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppTabs } from "./AppTabs";
import { ThemeContext } from "../context/ThemeContext";

export const Routes = () => {
  const { isDarkTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <NavigationContainer theme={theme}>
        <AppTabs />
      </NavigationContainer>
      <StatusBar style={isDarkTheme ? "light" : "dark"} />
    </>
  );
};
