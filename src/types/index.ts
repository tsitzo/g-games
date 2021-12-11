export type AppTabsParams = {
  HomeScreen: undefined;
  CollectionsScreen: undefined;
  SettingsScreen: undefined;
};

export type AppStackParams = {
  OnboardingLandingScreen: undefined;
  OnboardingGenresSelectScreen: undefined;
  OnboardingPlatformsSelectScreen: undefined;
  AppTabs: undefined;
  GenresSelectScreen: undefined;
  PlatformsSelectScreen: undefined;
};

export type SettingsPlatform = {
  id: number;
  name: string;
};

export type SettingsGenre = {
  id: number;
  name: string;
};
