import { StyleSheet, Text, TextInput, SafeAreaView, View, Pressable,Pressable } from "react-native";


function handleLogin()
{
   // hacer funcion de validacion
}


function Formulario() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          placeholder="Ingrese su email"
          style={styles.input}
          value="Email"
        />

        <TextInput
          placeholder="Ingrese su contraseña"
          style={styles.input}
          secureTextEntry
        />
        <Pressable onPress={handleLogin}>
            <Text>INGRESAR</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Formulario;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});