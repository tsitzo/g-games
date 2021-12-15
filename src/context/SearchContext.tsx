import React, { FC, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type SearchContextState = {
  searchHistory: string[];
  removeFromHistory: (query: string) => void;
  addToHistory: (query: string) => void;
  clearHistory: () => void;
};

const contextDefaultValue: SearchContextState = {
  searchHistory: [],
  removeFromHistory: () => {},
  addToHistory: () => {},
  clearHistory: () => {},
};

export const SearchContext =
  createContext<SearchContextState>(contextDefaultValue);

export const SearchContextProvider: FC = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState<string[]>(
    contextDefaultValue.searchHistory
  );

  const removeFromHistory = (query: string) => {
    setSearchHistory(searchHistory.filter((el) => el !== query));
  };

  const addToHistory = (query: string) => {
    if (searchHistory.includes(query)) {
      searchHistory.splice(searchHistory.indexOf(query), 1);
    }
    setSearchHistory([query, ...searchHistory]);
  };
  const clearHistory = () => {
    setSearchHistory([]);
  };

  const saveSearchHistory = async (value: string[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@GGames/searchHistory", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadSearchHistory = async () => {
    try {
      const value = await AsyncStorage.getItem("@GGames/searchHistory");
      if (value !== null) {
        setSearchHistory(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadSearchHistory();
  }, []);

  useEffect(() => {
    saveSearchHistory(searchHistory);
  }, [searchHistory]);

  return (
    <SearchContext.Provider
      value={{ searchHistory, addToHistory, removeFromHistory, clearHistory }}
    >
      {children}
    </SearchContext.Provider>
  );
};
