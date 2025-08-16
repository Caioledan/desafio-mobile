import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "90%",
    height: "40%",
    borderRadius: 12,
    marginTop: 30,
  },
  titleView: {
    gap: 20,
    padding: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
  },
  NotasContainer: {
    padding: 30,
    gap: 20,
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
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  icon: {
    display: "flex",
    marginTop: 6,
  }
});