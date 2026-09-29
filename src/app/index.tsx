import CartaoTarefa from "@/components/cartaoTarefa";
import { Tarefa } from "@/components/cartaoTarefa/types";
import { cores as colors } from "@/infraestructure/theme/colors";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: "1",
    titulo: "Estudar React Native",
    concluida: false,
  },
  {
    id: "2",
    titulo: "Fazer exercício",
    concluida: true,
  },
  {
    id: "3",
    titulo: "Ler um livro",
    concluida: false,
  },
] as Array<Tarefa>;

export default function HomeScreen() {
  const [tarefas, setTarefas] = useState(data);
  const [adicionarTarefa, setAdicionarTarefa] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={styles.titlePage}>Minhas tarefas: {tarefas.length}</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            flexDirection: "row",
          }}
        >
          <TextInput
            onChangeText={(texto) => setAdicionarTarefa(texto)}
            value={adicionarTarefa}
            placeholder="Adicione nova tarefa"
          />
          <TouchableOpacity
            onPress={() => {
              const novaTarefaObj = {
                id: (tarefas.length + 1).toString(),
                titulo: adicionarTarefa,
                concluida: false,
              } as Tarefa;

              setTarefas([...tarefas, novaTarefaObj]);
              setAdicionarTarefa("");
            }}
          >
            <Text>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tarefas}
          style={{ marginTop: 10 }}
          renderItem={({ item: task }) => (
            <CartaoTarefa key={task.id} tarefa={task} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 25,
    backgroundColor: colors.secondary,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
});
