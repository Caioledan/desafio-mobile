import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function UserInfo() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  let mensagemDeEntrada = "Bem vindo(a),";

  if (user.funcionalidade === "Professor") {
    mensagemDeEntrada = "Bem Vindo(a), professor(a)";
  } else if (user.funcionalidade === "Diretor") {
    mensagemDeEntrada = "Bem Vindo(a), diretor(a)";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mensagemDeEntrada}</Text>
      <Text style={styles.text}>{user.nome}</Text>
    </View>
  );
}
