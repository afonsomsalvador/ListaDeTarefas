import CartaoTarefa from "@/components/cartaoTarefa";
import { Tarefa } from "@/components/cartaoTarefa/types";
import { cores as colors } from "@/infraestructure/theme/colors";
import { useState } from "react";
import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** Dados iniciais das tarefas */
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
  // Esquema de cores do dispositivo (dark, light, null)
  const esquema = useColorScheme();

  // Estado local, memória interna do componente
  const [tarefas, setTarefas] = useState(data);
  const [adicionarTarefa, setAdicionarTarefa] = useState("");
  const [aCarregar, setACarregar] = useState(true);

  //Estado derivado
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida);
  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida);
  const porFazer = tarefas.filter((tarefa) => !tarefa.concluida).length;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: esquema === "dark" ? "#000" : colors.secondary,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={styles.titlePage}>
          Minhas tarefas: {porFazer + "/" + tarefas.length}
        </Text>
        <View
          style={{
            borderColor: colors.primary,
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: colors.primary,
              marginRight: 10,
              borderRadius: 8,
              padding: 5,
              color: colors.primary,
            }}
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
            style={{
              borderWidth: 1,
              borderRadius: 8,
              borderColor: colors.primary,
              padding: 10,
            }}
          >
            <Text style={{ color: "#FFF" }}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        {/* Lista de tarefas por FlatList */}
        {/* <FlatList
          data={tarefas}
          style={{ marginTop: 10 }}
          renderItem={({ item: task }) => (
            <CartaoTarefa key={task.id} tarefa={task} />
          )}
        /> */}
        {/* Lista de tarefas por SectionList */}
        <SectionList
          sections={[
            { title: "Tarefas pendentes", data: tarefasPendentes },
            { title: "Tarefas concluídas", data: tarefasConcluidas },
          ]}
          style={{ marginTop: 30 }}
          renderItem={({ item: task }) => (
            <CartaoTarefa key={task.id} tarefa={task} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FFF" }}>
              {title}
            </Text>
          )}
        />
        {/* Imagem local (remover display none para ver) */}
        <Image
          source={require("../assets/tigre.jpg")}
          style={{ width: 400, height: 200, display: "none" }}
        />
        {/* Carregando a imagem em onLoadEnd */}
        {aCarregar && (
          <View>
            <Text>Carregando...</Text>
          </View>
        )}
        {/* Imagem remote (remover display none para ver)*/}
        <Image
          source={{
            uri: "https://recantoalvorada.com.br/wp-content/uploads/2022/01/bem-estar-animal-980x408.jpeg",
          }}
          onLoadEnd={() => setACarregar(false)}
          style={{ width: 400, height: 200, marginBottom: 200 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: colors.secondary,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
});
