import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: { flex: 1 },
  header: { paddingHorizontal: 15 },
  content: { flex: 1 },
  buttonWrapper: {
    flex: 1 / 6,
    justifyContent: "center",
    padding: 15,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "700" },
  button: { borderRadius: 55, padding: 15 },
});
