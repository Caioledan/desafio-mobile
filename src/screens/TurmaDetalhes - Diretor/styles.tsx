import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    gap: 30,
    paddingBottom: 80,
    alignItems: "center",
    paddingVertical: 50,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 40,
  },
});
