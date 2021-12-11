import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SettingsContextProvider } from "./src/context/SettingsContext";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <SettingsContextProvider>
          <Routes />
        </SettingsContextProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
