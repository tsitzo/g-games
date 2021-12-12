import React, { FC, useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Typography from "../Typography";
import { SettingsContext } from "../../context/SettingsContext";
import { Platform } from "../../types";
import { styles } from "./styles";

interface IPlatformSelectionTileProps {
  platform: Platform;
}

const PlatformSelectionTile: FC<IPlatformSelectionTileProps> = ({
  platform,
}) => {
  const { selectedPlatforms, addPlatform, removePlatform } =
    useContext(SettingsContext);

  const { colors } = useTheme();

  const selected = selectedPlatforms.find((p) => p === platform.id);

  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() =>
        selected ? removePlatform(platform) : addPlatform(platform)
      }
    >
      <View style={styles.tileLeft}>
        <Typography
          variant={selected ? "bold" : "light"}
          size={16}
          numberOfLines={1}
        >
          {platform.name}
        </Typography>
      </View>
      {selected && (
        <Ionicons name="md-checkmark-sharp" size={16} color={colors.primary} />
      )}
    </TouchableOpacity>
  );
};

export default PlatformSelectionTile;
