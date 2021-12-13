import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flatList: { paddingHorizontal: 7.5 },
  imageWrapper: {
    flex: 1 / 3,
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
