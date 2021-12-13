import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
    height: "100%",
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
