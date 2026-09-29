import { Checkbox } from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
import { Tarefa } from "./types";

interface CartaoTarefaProps {
  tarefa: Tarefa;
  onClick?: (id: string) => void;
}

const CartaoTarefa = ({ tarefa, onClick }: CartaoTarefaProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        padding: 20,
        borderRadius: 8,
        marginVertical: 3,
        borderWidth: 1.5,
        borderColor: "#fff",
      }}
      onPress={() => onClick && onClick(tarefa.id)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderColor: "#fff",
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "Arial",
            fontWeight: "500",
          }}
        >
          {tarefa.titulo}
        </Text>
        <Checkbox
          value={tarefa.concluida}
          onValueChange={onClick ? () => onClick(tarefa.id) : undefined}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CartaoTarefa;
