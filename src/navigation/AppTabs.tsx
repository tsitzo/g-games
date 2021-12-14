import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Main/HomeScreen";
import CollectionsScreen from "../screens/Main/CollectionsScreen";
import SettingsScreen from "../screens/Main/SettingsScreen";

import { AppTabsParams } from "../types";
import SearchScreen from "../screens/Main/SearchScreen";

const HomeStack = createNativeStackNavigator();
const CollectionsStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
        headerLargeTitleStyle: { fontSize: 32 },
      }}
    >
      <HomeStack.Screen name="GGames" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const CollectionsScreenStack = () => {
  const { colors } = useTheme();

  return (
    <CollectionsStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
        headerLargeTitleStyle: { fontSize: 32 },
      }}
    >
      <CollectionsStack.Screen
        name="Collections"
        component={CollectionsScreen}
      />
    </CollectionsStack.Navigator>
  );
};

const SearchScreenStack = () => {
  const { colors } = useTheme();

  return (
    <SearchStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
        headerLargeTitleStyle: { fontSize: 32 },
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

const SettingsScreenStack = () => {
  const { colors } = useTheme();

  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
        headerLargeTitleStyle: { fontSize: 32 },
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator<AppTabsParams>();

export const AppTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: false,
        tabBarStyle: {
          backgroundColor: colors.card,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-home" : "md-home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="SearchScreen"
        component={SearchScreenStack}
        options={{
          tabBarLabel: "Search",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-search" : "md-search-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="CollectionsScreen"
        component={CollectionsScreenStack}
        options={{
          tabBarLabel: "Collections",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-bookmark" : "md-bookmark-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="SettingsScreen"
        component={SettingsScreenStack}
        options={{
          tabBarLabel: "Settings",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-settings" : "md-settings-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
