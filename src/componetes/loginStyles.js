import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 24,
    alignItems: "center",
  },

  loginImage: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1.5,
    borderColor: "#9d62ff",
    borderRadius: 4,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#fff",
  },

  button: {
    width: "100%",
    backgroundColor: "#9162fa",
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  linkText: {
  marginTop: 10,
  fontSize: 14,
  color: "#000",
  textAlign: "center",
}
});
