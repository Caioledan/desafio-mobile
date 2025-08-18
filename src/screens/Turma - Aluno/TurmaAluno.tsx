import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { useAuth } from "../../hooks/useAuth";
import { TurmaInfoCard } from "../../components/TurmaInfoCard/TurmaInfoCard";
import { getTurmaByID } from "../../database";
import { DisciplinasAluno } from "../../components/Aluno/DisciplinasAluno/DisciplinasAluno";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { ButtonLogout } from "../../components/ButtonLogout/ButtonLogout";

export function TurmaAluno() {
  const { user } = useAuth();

  const turma = user?.turmaId ? getTurmaByID(user.turmaId) : undefined;

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Logo height={105} width={93} fontSize={20} />
      <UserInfo />
      <TurmaInfoCard turma={turma} />
      <DisciplinasAluno />
      <ButtonLogout />
    </ScrollView>
  );
}
