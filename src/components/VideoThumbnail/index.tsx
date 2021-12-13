import React, { FC } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { styles } from "./styles";

interface IVideoThumbnailProps {
  videoID: string;
}

const VideoThumbnail: FC<IVideoThumbnailProps> = ({ videoID }) => {
  return (
    <TouchableOpacity
      style={styles.imagePanel}
      onPress={() =>
        WebBrowser.openBrowserAsync(
          `https://www.youtube.com/watch?v=${videoID}`
        )
      }
    >
      <ImageBackground
        resizeMode="cover"
        source={{ uri: `https://i.ytimg.com/vi/${videoID}/hq720.jpg` }}
        style={styles.imageBackground}
      />
      <View style={styles.imageBackgroundCover} />
      <View style={styles.imageCoverContainer}>
        <FontAwesome name="play" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

export default VideoThumbnail;
