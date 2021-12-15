import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchbarWrapper: {
    paddingHorizontal: 16,
    width: "100%",
    marginVertical: 16,
    justifyContent: "center",
  },
  searchbarInput: {
    paddingVertical: 10,
    paddingLeft: 35,
    paddingRight: 15,
    borderRadius: 10,
    width: "100%",
  },
  iconWrapper: {
    position: "absolute",
    left: 24,
  },
  searchHistoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  flatlist: {
    paddingHorizontal: 15,
  },
  searchHistoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
});
