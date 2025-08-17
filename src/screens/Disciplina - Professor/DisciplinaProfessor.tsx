import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ProfessorStackParamList } from "../../routes/professor.routes";
import { Disciplina, Turma } from "../../interfaces/escola.interface";
import { getDisciplinaById, getTurmaByID, getUserById } from "../../database";
import { DisciplinaAlunos } from "../../components/Professor/DisciplinaAlunos/DisciplinaAlunos";
import { User } from "../../interfaces/auth.interface";
import { useAuth } from "../../hooks/useAuth";
import { StackNavigationProp } from "@react-navigation/stack";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard";

type DisciplinaProfessorRouteProp = RouteProp<
  ProfessorStackParamList,
  "DisciplinaProfessor"
>;
type NavigationProp = StackNavigationProp<ProfessorStackParamList, "DisciplinaProfessor">;

export function DisciplinaProfessor() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DisciplinaProfessorRouteProp>();
  const { disciplinaId, turmaId } = route.params;
  const [disciplina, setDisciplina] = useState<Disciplina | undefined>();
  const [turma, setTurma] = useState<Turma | undefined>(undefined);
  const { user } = useAuth();

  useEffect(() => {
    const dadosDisciplina = getDisciplinaById(disciplinaId);
    const dadosTurma = getTurmaByID(turmaId);
    setDisciplina(dadosDisciplina);
    setTurma(dadosTurma)
  }, [disciplinaId, turmaId]);

  const alunosDaTurma = useMemo(() => {
    if (!turma) {
      return [];
    }

    return turma.alunosIds
      .map((alunoId) => getUserById(alunoId))
      .filter((aluno): aluno is User => aluno !== undefined);
  }, [turma]);

  const handleALunoPress = (alunoId: number) => {
    navigation.navigate("NotasDoAluno", {disciplinaId: disciplinaId, alunoId: alunoId})
  };

  return (
    <View style={styles.container}>
      <Logo height={105} width={93} fontSize={20} />
      <DisciplinaInfoCard 
        disciplina={disciplina?.nome ?? "Disciplina não encontrada"}
      />
      <DisciplinaAlunos alunos={alunosDaTurma} onPress={handleALunoPress} />
    </View>
  );
}
