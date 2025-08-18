import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0.2,
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#F3F0F0",
    display: "flex",
    flexDirection: "row",
    padding: 12,
    gap: 11,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontWeight: "semibold",
    fontSize: 18,
  },
});
