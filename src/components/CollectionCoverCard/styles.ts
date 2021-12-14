import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleWrapper: {
    position: "absolute",
    bottom: 5,
    left: 5,
    padding: 5,
    backgroundColor: "#070707",
  },
  title: { color: "#fff", fontWeight: "700" },
  coverWrapper: { flex: 1, overflow: "hidden" },
  smallCoverwrapper: { flex: 1 / 2, aspectRatio: 135 / 195, margin: 7.5 },
});
