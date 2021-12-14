import React, { FC, createContext, useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { CollectionGame } from "../types";

export type CollectionsContextState = {
  backlog: CollectionGame[];
  archive: CollectionGame[];
  wishlist: CollectionGame[];
  isBacklog: (id: number) => boolean;
  isArchive: (id: number) => boolean;
  isWishlist: (id: number) => boolean;
  backlogHandler: (game: CollectionGame) => void;
  archiveHandler: (game: CollectionGame) => void;
  wishlistHandler: (game: CollectionGame) => void;
};

const contextDefaultValue: CollectionsContextState = {
  backlog: [],
  archive: [],
  wishlist: [],
  isBacklog: () => false,
  isArchive: () => false,
  isWishlist: () => false,
  backlogHandler: () => {},
  archiveHandler: () => {},
  wishlistHandler: () => {},
};

export const CollectionsContext =
  createContext<CollectionsContextState>(contextDefaultValue);

export const CollectionsContextProvider: FC = ({ children }) => {
  const [backlog, setBacklog] = useState<CollectionGame[]>(
    contextDefaultValue.backlog
  );

  const [wishlist, setWishlist] = useState<CollectionGame[]>(
    contextDefaultValue.wishlist
  );

  const [archive, setArchive] = useState<CollectionGame[]>(
    contextDefaultValue.archive
  );

  const isBacklog = (gameId: number) => {
    return backlog.some((game) => game.id === gameId);
  };

  const isWishlist = (gameId: number) => {
    return wishlist.some((g) => g.id === gameId);
  };

  const isArchive = (gameId: number) => {
    return archive.some((g) => g.id === gameId);
  };

  const addToBacklog = (game: CollectionGame) => {
    setBacklog([...backlog, game]);
  };

  const addToArchive = (game: CollectionGame) => {
    setArchive([...archive, game]);
  };

  const addToWishlist = (game: CollectionGame) => {
    setWishlist([...wishlist, game]);
  };

  const removeFromBacklog = (game: CollectionGame) => {
    setBacklog(backlog.filter((g) => g.id !== game.id));
  };

  const removeFromArchive = (game: CollectionGame) => {
    setArchive(archive.filter((g) => g.id !== game.id));
  };

  const removeFromWishlist = (game: CollectionGame) => {
    setWishlist(wishlist.filter((g) => g.id !== game.id));
  };

  const backlogHandler = (game: CollectionGame) => {
    if (isBacklog(game.id)) {
      removeFromBacklog(game);
      removeFromArchive(game);
      removeFromWishlist(game);
    } else {
      addToBacklog(game);
      removeFromArchive(game);
      removeFromWishlist(game);
    }
  };
  const archiveHandler = (game: CollectionGame) => {
    if (isArchive(game.id)) {
      removeFromBacklog(game);
      removeFromArchive(game);
      removeFromWishlist(game);
    } else {
      addToArchive(game);
      removeFromBacklog(game);
      removeFromWishlist(game);
    }
  };

  const wishlistHandler = (game: CollectionGame) => {
    if (isWishlist(game.id)) {
      removeFromBacklog(game);
      removeFromArchive(game);
      removeFromWishlist(game);
    } else {
      addToWishlist(game);
      removeFromArchive(game);
      removeFromBacklog(game);
    }
  };

  const saveBacklog = async (value: CollectionGame[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@GGames/backlog", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const saveArchive = async (value: CollectionGame[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@GGames/archive", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const saveWishlist = async (value: CollectionGame[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@GGames/wishlist", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadBacklog = async () => {
    try {
      const value = await AsyncStorage.getItem("@GGames/backlog");
      if (value !== null) {
        setBacklog(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadArchive = async () => {
    try {
      const value = await AsyncStorage.getItem("@GGames/archive");
      if (value !== null) {
        setArchive(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadWishlist = async () => {
    try {
      const value = await AsyncStorage.getItem("@GGames/backlog");
      if (value !== null) {
        setWishlist(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBacklog();
  }, []);

  useEffect(() => {
    saveBacklog(backlog);
  }, [backlog]);

  useEffect(() => {
    loadArchive();
  }, []);

  useEffect(() => {
    saveArchive(archive);
  }, [archive]);

  useEffect(() => {
    loadWishlist();
  }, []);

  useEffect(() => {
    saveWishlist(wishlist);
  }, [wishlist]);

  return (
    <CollectionsContext.Provider
      value={{
        backlog,
        backlogHandler,
        isBacklog,
        archive,
        archiveHandler,
        isArchive,
        wishlist,
        wishlistHandler,
        isWishlist,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};
