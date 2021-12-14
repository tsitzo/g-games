import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CollectionsContextProvider } from "./src/context/CollectionsContext";
import { SettingsContextProvider } from "./src/context/SettingsContext";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <SettingsContextProvider>
          <CollectionsContextProvider>
            <Routes />
          </CollectionsContextProvider>
        </SettingsContextProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
