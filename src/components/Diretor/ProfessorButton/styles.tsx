import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F0F0",
    borderRadius: 10,
    borderWidth: 0.2,
    flexWrap: "wrap",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    gap: 11,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontWeight: "semibold",
    fontSize: 16,
    textAlign: "center",
  }
});