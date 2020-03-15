import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

const mostrarMensagem = () => {
  Alert.alert("Você clicou no botão!!!");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá Mundo!</Text>
      <Button title="Clique Me" onPress={mostrarMensagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    marginBottom: 5
  }
});
