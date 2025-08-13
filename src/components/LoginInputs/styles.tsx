import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "60%",
    marginTop: 30,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  text: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 24,
  },
  image: {
    height:24,
    width: 24,
    alignSelf: "center",
    marginTop: 14,
    marginRight: 8,
  },
});