import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageWrapper: {
    width: Dimensions.get("screen").width * 0.35,
    aspectRatio: 54 / 76,
    borderRadius: 5,
    overflow: "hidden",
  },

  placeHolderImage: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    zIndex: 0,
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  image: { width: "100%", height: "100%", zIndex: 0 },
  imageStatic: { height: 30, width: 30 },
});
