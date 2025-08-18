import React, { useState } from "react";
import { Alert, View } from "react-native";

import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { LoginInputs } from "../../components/Login/LoginInputs/LoginInputs";
import { LoginButton } from "../../components/Login/LoginButton/LoginButton";
import { LoginText } from "../../components/Login/LoginText/LogintText";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  async function handleLogin() {
    if (!matricula.trim() || !senha.trim()) {
      Alert.alert("Atenção", "Preencha sua matrícula e senha");
      return;
    }

    const success = await login(matricula, senha);

    if (!success) {
      Alert.alert("Dados incorreros", "Matrícula ou senha inválidas.");
    }
  }

  return (
    <View style={styles.container}>
      <Logo height={144} width={163} fontSize={36} />
      <LoginInputs
        matriculaValue={matricula}
        onMatriculaChange={setMatricula}
        senhaValue={senha}
        onSenhaChange={setSenha}
      />
      <LoginButton onPress={handleLogin} />
      <LoginText />
    </View>
  );
}
