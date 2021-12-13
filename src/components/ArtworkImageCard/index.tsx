import { useTheme } from "@react-navigation/native";
import React, { FC, useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Game } from "../../types";

import { styles } from "./styles";

interface IArtworkImageCardProps {
  game: Game;
}

const ArtworkImageCard: FC<IArtworkImageCardProps> = ({ game }) => {
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
      <Image
        resizeMode="cover"
        source={{
          uri: game?.artworks
            ? `https:${game.artworks[0].url?.replace(
                "t_thumb",
                "t_screenshot_big_2x"
              )}`
            : `https:${game?.cover?.url?.replace("t_thumb", "t_cover_big_2x")}`,
        }}
        style={styles.image}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
    </View>
  );
};

export default ArtworkImageCard;
