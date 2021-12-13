import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: { flex: 1 },
  centeredPage: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomSheetScrollview: {
    padding: 20,
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
  },
  videoWrapper: {
    width: 192,
    height: 108,
  },
});
