import FormularioScreen from "@/features/formulario";
import HomeScreen from "@/features/home";
import TarefasScreen from "@/features/tarefas";
import { RootStackParamList } from "@/navigation/types";
import { NavigationContainer } from "expo-router/build/react-navigation";
import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // Esquema de cores do dispositivo (dark, light, null)
  const esquema = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Formulario" component={FormularioScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
