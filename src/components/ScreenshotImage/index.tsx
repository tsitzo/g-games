import { useTheme } from "@react-navigation/native";
import React, { FC, useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Screenshot } from "../../types";

import { styles } from "./styles";

interface IScreenshotImageProps {
  screenshot: Screenshot;
}

const ScreenshotImage: FC<IScreenshotImageProps> = ({ screenshot }) => {
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
      {screenshot.url ? (
        <Image
          resizeMode="cover"
          source={{
            uri: `https:${screenshot?.url?.replace(
              "t_thumb",
              "t_screenshot_big_2x"
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

export default ScreenshotImage;
