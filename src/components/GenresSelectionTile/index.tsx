import React, { FC, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Typography from "../Typography";

import { SettingsContext } from "../../context/SettingsContext";
import { Genre } from "../../types";
import { styles } from "./styles";

interface IGenresSelectionTileProps {
  genre: Genre;
}

const GenresSelectionTile: FC<IGenresSelectionTileProps> = ({ genre }) => {
  const { selectedGenres, addGenre, removeGenre } = useContext(SettingsContext);

  const { colors } = useTheme();

  const selected = selectedGenres.find((g) => g === genre.id);

  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => (selected ? removeGenre(genre) : addGenre(genre))}
    >
      <View style={styles.tileLeft}>
        <Typography
          variant={selected ? "bold" : "light"}
          size={16}
          numberOfLines={1}
        >
          {genre.name}
        </Typography>
      </View>
      {selected && (
        <Ionicons name="md-checkmark-sharp" size={16} color={colors.primary} />
      )}
    </TouchableOpacity>
  );
};

export default GenresSelectionTile;
