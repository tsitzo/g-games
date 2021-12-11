import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
