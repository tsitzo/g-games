import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredPage: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { height: 150, width: 150 },

  button: {
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontWeight: "700", color: "#fff", fontSize: 18 },
});
