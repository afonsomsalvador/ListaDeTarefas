import { Tarefa } from "@/components/cartaoTarefa/types";

export type RootStackParamList = {
  Home: undefined;
  Tarefas: undefined;
  Formulario: undefined;
  Detalhe: { tarefa: Tarefa };
};
