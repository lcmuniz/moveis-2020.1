import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const aoDigitarTarefa = texto => {
    setTarefa(texto);
  };

  const adicionarTarefa = () => {
    setTarefas(tarefas => [...tarefas, tarefa]);
    setTarefa("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite uma tarefa"
          style={styles.input}
          value={tarefa}
          onChangeText={aoDigitarTarefa}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} />
      </View>
      <FlatList
        data={tarefas}
        keyExtractor={item => item}
        renderItem={data => (
          <View style={styles.item}>
            <Text>{data.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    width: "70%"
  },
  item: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});
