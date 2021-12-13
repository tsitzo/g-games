import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imagePanel: { flex: 1, borderRadius: 5, overflow: "hidden" },
  imageBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageBackgroundCover: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(1,1,1,0.7)",
  },
  imageCoverContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // height: 108,
    // width: 198,
  },
});
