import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppStack } from "./AppStack";
import { ThemeContext } from "../context/ThemeContext";

export const Routes = () => {
  const { isDarkTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <NavigationContainer theme={theme}>
        <AppStack />
      </NavigationContainer>
      <StatusBar style={isDarkTheme ? "light" : "dark"} />
    </>
  );
};
