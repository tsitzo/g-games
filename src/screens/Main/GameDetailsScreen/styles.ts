import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: { flex: 1 },
  centeredPage: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomSheetScrollview: {
    padding: 20,
    paddingBottom: 50,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textValue: { flex: 1, flexWrap: "wrap" },
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
  screenshotWrapper: {
    width: 192 * 1.1,
    height: 108 * 1.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  videoWrapper: {
    width: 192,
    height: 108,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  coverContainer: { alignItems: "center", justifyContent: "center", flex: 5 },
  coverWrapper: {
    width: Dimensions.get("screen").width * 0.6,
    aspectRatio: 54 / 76,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imagePanel: { flex: 1 },
  collectionButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: 20,
    elevation: 3,
    marginRight: 10,
  },
  collectionButtonText: {},
  collectionButtonsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
