import React, { useContext } from "react";
import { SafeAreaView, FlatList } from "react-native";

import PlatformSelectionTile from "../../../components/PlatformSelectionTile";
import SafeArea from "../../../components/SafeArea";
import { SettingsContext } from "../../../context/SettingsContext";

import { styles } from "./styles";

const PlatformsSelectScreen = () => {
  const { platforms, selectedPlatforms } = useContext(SettingsContext);

  return (
    <SafeArea>
      <FlatList
        data={platforms
          .sort((a, b) => a.name.localeCompare(b.name))
          .sort(
            (a, b) =>
              selectedPlatforms.indexOf(b.id) - selectedPlatforms.indexOf(a.id)
          )}
        renderItem={({ item }) => <PlatformSelectionTile platform={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeArea>
  );
};

export default PlatformsSelectScreen;
