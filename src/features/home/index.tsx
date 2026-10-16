import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, Text, View } from "react-native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = ({ navigation, route }: NavigationProps) => {
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
