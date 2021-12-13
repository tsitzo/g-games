import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";

import { AppStackParams } from "../types";
import { AppTabs } from "./AppTabs";
import { SettingsContext } from "../context/SettingsContext";

import OnboardingGenresSelectScreen from "../screens/Onboarding/OnboardingGenresSelectScreen";
import OnboardingPlatformsSelectScreen from "../screens/Onboarding/OnboardingPlatformsSelectScreen";
import OnboardingLandingScreen from "../screens/Onboarding/OnboardingLandingScreen";

import GenresSelectScreen from "../screens/Main/GenresSelectScreen";
import PlatformsSelectScreen from "../screens/Main/PlatformsSelectScreen";
import GameDetailsScreen from "../screens/Main/GameDetailsScreen";
import SeeMoreGamesScreen from "../screens/Main/SeeMoreGamesScreen";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { colors } = useTheme();
  const { isFirstVisit, isFirstVisitLoading } = useContext(SettingsContext);

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
          <Stack.Screen
            name="GenresSelectScreen"
            component={GenresSelectScreen}
            options={{
              headerLargeTitle: true,
              headerTitle: "Genres",
            }}
          />
          <Stack.Screen
            name="PlatformsSelectScreen"
            component={PlatformsSelectScreen}
            options={{
              headerLargeTitle: true,
              headerTitle: "Platforms",
            }}
          />
          <Stack.Screen
            name="GameDetailsScreen"
            component={GameDetailsScreen}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="SeeMoreGamesScreen"
            component={SeeMoreGamesScreen}
            options={({ route }) => ({
              headerLargeTitle: true,
              headerTitle: route.params.name,
              headerBackTitle: "Back",
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
