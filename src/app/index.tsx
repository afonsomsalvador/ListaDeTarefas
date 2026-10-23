import Nav from "@/navigation/navigation";
import { RootStackParamList } from "@/navigation/types";
import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // Esquema de cores do dispositivo (dark, light, null)
  const esquema = useColorScheme();

  return <Nav />;
}
