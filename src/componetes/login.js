import { useState } from "react";
import { Image, Text, TextInput, View, Pressable } from "react-native";
import { styles } from "./loginStyles";

const LOGIN_IMAGE =
  "https://docs.google.com/u/2/docs-images-rt/APuouOd6_-pr9lsTiCCVKlu1t4YXNxdHJcZLLYSkx6aa-C1rST5GLYsTVMwIPlPztD94OehHtzqfVJYkQ21Mje9Q7U-7h1vFjoX8F5bsWzaccjnVNe9-DrNAn5nxpYzOVp1hbuB2D2OPMM29-zzE8zNQll91UE9kNQ=s2048";

function Formulario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const USER = "Tobias@gmail.com";
    const PASSWORD = "12345678";

    if (email === USER && password === PASSWORD) {
      alert("Login exitoso");
    } else if (email === "" || password === "") {
      alert("Por favor, complete todos los campos");
    } else {
      alert("Credenciales incorrectas");
    }
  }
            
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        <Image
          source={{ uri: LOGIN_IMAGE }}
          style={styles.loginImage}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Login</Text>

        <TextInput
          placeholder="Ingrese su email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Ingrese su contrasena"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />


        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </Pressable>
         <Text style={styles.linkText}>Olvidaste la clave?</Text>

         <Text style={styles.linkText}>Crear Cuenta</Text>

      </View>
    </View>
  );
}

export default Formulario;
