import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: { flex: 1 },

  coverShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  flatList: { paddingHorizontal: 7.5 },
  coverWrapper: {
    width: Dimensions.get("screen").width / 2 - 15 - 7.5,
    margin: 7.5,
    aspectRatio: 135 / 195,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    overflow: "hidden",
    elevation: 3,
    padding: 5,
  },
});
