import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    justifyContent: "space-between",
    gap: 30,
    paddingBottom: 80,
    alignItems: "center",
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
  info: {
    display: "flex",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 40,
  },
});
