import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: NavigationProps) => {
  const [aCarregar, setACarregar] = useState(true);

  return (
    <View>
      {/* Imagem local (remover display none para ver) */}
      <Image
        source={require("../../assets/tigre.jpg")}
        style={{ width: 400, height: 200, display: "none" }}
      />
      {/* Carregando a imagem em onLoadEnd */}
      {aCarregar && (
        <View>
          <Text>Carregando...</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate("Formulario")}>
        <Text>Ir para Formulário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("Tarefas")}
      >
        <Text>Ir para Tarefas</Text>
      </TouchableOpacity>
      {/* Imagem remote (remover display none para ver)*/}
      <Image
        source={{
          uri: "https://recantoalvorada.com.br/wp-content/uploads/2022/01/bem-estar-animal-980x408.jpeg",
        }}
        onLoadEnd={() => setACarregar(false)}
        style={{ width: 400, height: 200, marginBottom: 200 }}
      />
    </View>
  );
};

export default HomeScreen;
