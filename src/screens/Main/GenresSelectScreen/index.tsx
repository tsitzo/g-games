import React, { useContext } from "react";
import { FlatList, SafeAreaView } from "react-native";

import GenresSelectionTile from "../../../components/GenresSelectionTile";
import { SettingsContext } from "../../../context/SettingsContext";

import { styles } from "./styles";

const GenresSelectScreen = () => {
  const { genres, selectedGenres } = useContext(SettingsContext);

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={genres
          .sort((a, b) => a.name.localeCompare(b.name))
          .sort(
            (a, b) =>
              selectedGenres.indexOf(b.id) - selectedGenres.indexOf(a.id)
          )}
        renderItem={({ item }) => <GenresSelectionTile genre={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default GenresSelectScreen;
