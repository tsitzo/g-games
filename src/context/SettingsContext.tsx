import React, { FC, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { platforms } from "../data/platforms";
import { SettingsGenre, SettingsPlatform } from "../types";
import { genres } from "../data/genres";

type SettingsContextState = {
  isFirstVisitLoading: boolean;
  isFirstVisit: boolean;
  platforms: SettingsPlatform[];
  selectedPlatforms: number[];
  genres: SettingsGenre[];
  selectedGenres: number[];
  addPlatform: (platform: SettingsPlatform) => void;
  removePlatform: (platform: SettingsPlatform) => void;
  addGenre: (genre: SettingsGenre) => void;
  removeGenre: (genre: SettingsGenre) => void;
  setFirstVisitFalse: () => void;
};

const contextDefaultValue: SettingsContextState = {
  isFirstVisitLoading: false,
  isFirstVisit: true,
  platforms: platforms,
  selectedPlatforms: [],
  genres: genres,
  selectedGenres: [],
  addPlatform: () => {},
  removePlatform: () => {},
  addGenre: () => {},
  removeGenre: () => {},
  setFirstVisitFalse: () => {},
};

export const SettingsContext =
  createContext<SettingsContextState>(contextDefaultValue);

export const SettingsContextProvider: FC = ({ children }) => {
  const [isFirstVisitLoading, setIsFirstVisitLoading] = useState<boolean>(
    contextDefaultValue.isFirstVisitLoading
  );
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(
    contextDefaultValue.isFirstVisit
  );

  const [platforms, setPlatforms] = useState<SettingsPlatform[]>(
    contextDefaultValue.platforms
  );

  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>(
    contextDefaultValue.selectedPlatforms
  );

  const [genres, setGenres] = useState<SettingsGenre[]>(
    contextDefaultValue.genres
  );

  const [selectedGenres, setSelectedGenres] = useState<number[]>(
    contextDefaultValue.selectedGenres
  );

  const setFirstVisitFalse = () => {
    setIsFirstVisit(false);
  };

  const addPlatform = (platform: SettingsPlatform) => {
    if (selectedPlatforms.length < 10)
      setSelectedPlatforms([...selectedPlatforms, platform.id]);
  };

  const removePlatform = (platform: SettingsPlatform) => {
    if (selectedPlatforms.length > 1) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform.id));
    } else alert("You need to have at least 1 platform selected");
  };

  const addGenre = (genre: SettingsGenre) => {
    if (selectedGenres.length < 5)
      setSelectedGenres([...selectedGenres, genre.id]);
  };

  const removeGenre = (genre: SettingsGenre) => {
    if (selectedGenres.length > 1) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre.id));
    } else alert("You need to have at least 1 genre selected");
  };

  const saveFirstVisit = async (value: boolean) => {
    try {
      const jsonValue = value === true ? "true" : "false";
      await AsyncStorage.setItem("@GGames/firstVisit", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadFirstVisit = async () => {
    setIsFirstVisitLoading(true);
    try {
      const value = await AsyncStorage.getItem("@GGames/firstVisit");

      if (value === "false") {
        setIsFirstVisit(false);
      } else {
        setIsFirstVisit(true);
      }
    } catch (error) {
      console.log(error);
    }
    setIsFirstVisitLoading(false);
  };

  const savePlatforms = async (value: number[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@GGames/selectedPlatforms", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPlatforms = async () => {
    try {
      const value = await AsyncStorage.getItem("@GGames/selectedPlatforms");
      if (value !== null) {
        setSelectedPlatforms(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveGenres = async (value: number[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@GGames/selectedGenres", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadGenres = async () => {
    try {
      const value = await AsyncStorage.getItem("@GGames/selectedGenres");
      if (value !== null) {
        setSelectedGenres(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFirstVisit();
  }, []);

  useEffect(() => {
    saveFirstVisit(isFirstVisit!);
  }, [isFirstVisit]);

  useEffect(() => {
    loadPlatforms();
  }, []);

  useEffect(() => {
    savePlatforms(selectedPlatforms!);
  }, [selectedPlatforms]);

  useEffect(() => {
    loadGenres();
  }, []);

  useEffect(() => {
    saveGenres(selectedGenres!);
  }, [selectedGenres]);

  return (
    <SettingsContext.Provider
      value={{
        isFirstVisit,
        isFirstVisitLoading,
        platforms,
        selectedPlatforms,
        genres,
        selectedGenres,
        setFirstVisitFalse,
        addPlatform,
        removePlatform,
        addGenre,
        removeGenre,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
