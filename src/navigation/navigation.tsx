import DetalheScreen from "@/features/detalhe";
import FormularioScreen from "@/features/formulario";
import HomeScreen from "@/features/home";
import TarefasScreen from "@/features/tarefas";
import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Formulario"
        component={FormularioScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tarefas"
        options={{ headerShown: false }}
        component={TarefasScreen}
      />
      <Stack.Screen
        name="Detalhe"
        options={{ headerShown: false }}
        component={DetalheScreen}
      />
    </Stack.Navigator>
  );
};

export default Nav;
