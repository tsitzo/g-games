export type AppTabsParams = {
  HomeScreen: undefined;
  CollectionsScreen: undefined;
  SettingsScreen: undefined;
  SearchScreen: undefined;
};

export type AppStackParams = {
  OnboardingLandingScreen: undefined;
  OnboardingGenresSelectScreen: undefined;
  OnboardingPlatformsSelectScreen: undefined;
  AppTabs: undefined;
  GenresSelectScreen: undefined;
  PlatformsSelectScreen: undefined;
  GameDetailsScreen: { id: number };
  SeeMoreGamesScreen: { games: Game[]; name: string };
  SeeMoreCollectionsGamesScreen: {
    collection: string;
  };
  SearchResultsScreen: {
    query: string;
  };
};

export type Platform = {
  id: number;
  name: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Website = {
  id: number;
  category: number;
  url: string;
};

export type Company = {
  id: number;
  name: string;
};

export type InvolvedCompany = {
  id: number;
  company: Company;
  developer: boolean;
  publisher: boolean;
};

export type Cover = {
  id: number;
  url: string;
};

export type Screenshot = {
  id: number;
  url: string;
};
export type Artwork = {
  id: number;
  url: string;
};

export type DLC = {
  id: number;
  name: string;
  cover?: Cover;
};

export type SimilarGame = {
  id: number;
  name: string;
  cover?: Cover;
};

export type Video = {
  id: number;
  video_id: string;
};

export type Game = {
  id: number;
  cover?: Cover;
  first_release_date?: number;
  genres?: Genre[];
  involved_companies?: InvolvedCompany[];
  name: string;
  platforms?: Platform[];
  screenshots?: Screenshot[];
  similar_games?: SimilarGame[];
  dlcs?: DLC[];
  summary?: string;
  artworks?: Artwork[];
  websites?: Website[];
  aggregated_rating?: number;
  videos?: Video[];
};

export type CollectionGame = {
  id: number;
  cover?: Cover;
  name: string;
};
