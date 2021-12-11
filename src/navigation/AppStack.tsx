import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackParams } from "../types";
import { AppTabs } from "./AppTabs";

import OnboardingGenresSelectScreen from "../screens/Onboarding/OnboardingGenresSelectScreen";
import OnboardingPlatformsSelectScreen from "../screens/Onboarding/OnboardingPlatformsSelectScreen";
import OnboardingLandingScreen from "../screens/Onboarding/OnboardingLandingScreen";

import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { colors } = useTheme();
  const isFirstVisit = true;
  const isFirstVisitLoading = false;

  if (isFirstVisitLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={200} color={colors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        // headerBlurEffect: "systemMaterialDark",
        headerShadowVisible: false,
        headerTransparent: true,
      }}
    >
      {isFirstVisit ? (
        <>
          <Stack.Screen
            name="OnboardingLandingScreen"
            component={OnboardingLandingScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="OnboardingPlatformsSelectScreen"
            component={OnboardingPlatformsSelectScreen}
            options={{ headerLargeTitle: true, headerTitle: "Platforms" }}
          />
          <Stack.Screen
            name="OnboardingGenresSelectScreen"
            component={OnboardingGenresSelectScreen}
            options={{ headerLargeTitle: true, headerTitle: "Genres" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
