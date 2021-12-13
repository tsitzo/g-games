import React, { FC, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { View, Image, ActivityIndicator } from "react-native";
import { Game } from "../../types";

import { styles } from "./styles";

interface IGridCoverImageCard {
  game: Game;
}

const GridCoverImageCard: FC<IGridCoverImageCard> = ({ game }) => {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <View style={styles.imageWrapper}>
      {isLoading && (
        <View
          style={[styles.placeHolderImage, { backgroundColor: colors.card }]}
        >
          <ActivityIndicator color={colors.primary} />
        </View>
      )}
      {game.cover ? (
        <Image
          resizeMode="cover"
          source={{
            uri: `https:${game?.cover?.url?.replace(
              "t_thumb",
              "t_cover_big_2x"
            )}`,
          }}
          style={styles.image}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
      ) : (
        <View
          style={[styles.placeHolderImage, { backgroundColor: colors.card }]}
        >
          <ActivityIndicator color={colors.primary} />
        </View>
      )}
    </View>
  );
};

export default GridCoverImageCard;
