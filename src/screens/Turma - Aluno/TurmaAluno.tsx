import React from "react";
import { Button, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { TurmaInfoAluno } from "../../components/Aluno/TurmaInfoAluno/TurmaInfoAluno";
import { useAuth } from "../../hooks/useAuth";
import { DisciplinasAluno } from "../../components/Aluno/DisciplinasAluno/DisciplinasAluno";


export function TurmaAluno() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Logo height={105} width={93} fontSize={20} />
      <TurmaInfoAluno />
      <DisciplinasAluno />
      <Button title="LOGOUT" onPress={handleLogout} />
    </ScrollView>
  );
}
