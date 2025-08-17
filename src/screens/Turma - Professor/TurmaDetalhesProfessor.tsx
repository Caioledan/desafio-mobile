import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { TurmaInfoProfessor } from "../../components/Professor/TurmaInfoProfessor/TurmaInfoProfessor";
import { ProfessorStackParamList } from "../../routes/professor.routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Disciplina, Turma } from "../../interfaces/escola.interface";
import { getDisciplinaById, getTurmaByID } from "../../database";
import { DisciplinasProfessor } from "../../components/Professor/DisciplinasProfessor/DisciplinasProfessor";
import { useAuth } from "../../hooks/useAuth";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

type TurmaDetalhesProfessorRouteProp = RouteProp<ProfessorStackParamList, "TurmaDetalhesProfessor">
type NavigationProp = StackNavigationProp<ProfessorStackParamList, "TurmaDetalhesProfessor">


export function TurmaDetalhesProfessor() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<TurmaDetalhesProfessorRouteProp>();
  const { turmaId } = route.params;
  const [turma, setTurma] = useState<Turma | undefined>(undefined);
  const { user } = useAuth();

  useEffect(() => {
    const dadosDaTurma = getTurmaByID(turmaId);
    setTurma(dadosDaTurma);
  }, [turmaId]);

  const disciplinasDoProfessor = useMemo(() => {
    if (!turma || !user) {
      return [];
    }

    return turma.disciplinasIds
      .map((id) => getDisciplinaById(id))
      .filter((d): d is Disciplina => d !== undefined)
      .filter((disciplina) => disciplina.professorId === user.id);
  }, [turma, user]);

  const handleDisciplinaButton = (disciplinaId: number) => {
    navigation.navigate("DisciplinaProfessor", {turmaId: turmaId, disciplinaId: disciplinaId})
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Logo height={105} width={93} fontSize={20} />
      <TurmaInfoProfessor turma={turma} />
      <DisciplinasProfessor disciplinas={disciplinasDoProfessor} onPress={handleDisciplinaButton}/>
    </ScrollView>
  );
}
