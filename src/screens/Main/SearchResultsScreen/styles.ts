import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: { flex: 1 },
  centeredPage: { flex: 1, justifyContent: "center", alignItems: "center" },
  flatList: { paddingHorizontal: 7.5 },
  imageWrapper: {
    width: (Dimensions.get("screen").width - 60) / 3,
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

    elevation: 3,
  },
});
