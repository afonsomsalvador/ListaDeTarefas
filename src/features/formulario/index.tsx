import { useState } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    Switch,
    Text,
    TextInput,
} from "react-native";

const FormularioScreen = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [termos, setTermos] = useState(false);

  const validaNome = !(nome.trim().length > 3);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TextInput
          placeholder="Insira o seu nome"
          value={nome}
          onChangeText={setNome}
        />
        {validaNome ? <Text>O nome deve ter mais de 3 caracteres</Text> : null}
        <TextInput
          placeholder="Insira o seu email"
          value={email}
          keyboardType="email-address"
          maxLength={10}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Insira o seu numero"
          value={numero}
          keyboardType="numeric"
          onChangeText={setNumero}
        />
        <Switch value={termos} onValueChange={setTermos} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormularioScreen;
