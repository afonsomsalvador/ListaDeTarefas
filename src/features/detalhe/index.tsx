import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router";
import { Text, View } from "react-native";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Detalhe">;

const DetalheScreen = ({ navigation, route }: NavigationProps) => {
  const { tarefa } = route.params;
  return (
    <View>
      <Text>{tarefa.titulo}</Text>
    </View>
  );
};

export default DetalheScreen;
