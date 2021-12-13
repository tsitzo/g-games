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
});
