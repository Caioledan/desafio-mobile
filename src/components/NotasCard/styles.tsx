import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F3F0F0",
    width: "90%",
    height: "45%",
    borderRadius: 12,
    marginTop: 30,
  },
  titleView: {
    gap: 20,
    padding: 30,
    justifyContent: "space-around",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
    margin: 0,
  },
  notasContainer: {
    padding: 30,
    gap: 20,
    justifyContent: "space-around",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#999",
    width: 50,
    paddingVertical: 0,
  },
  aprovado: {
    backgroundColor: "#08CB00",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    marginBottom: 2,
  },
  recuperacao: {
    backgroundColor: "#FF2F2F",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    marginBottom: 2,
  },
  cursando: {
    backgroundColor: "#2f86ffff",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    marginBottom: 2,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    height: 30,
  },
  icon: {
    display: "flex",
    marginTop: 6,
  },
});
