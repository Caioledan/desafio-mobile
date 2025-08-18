import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ProfessorStackParamList } from "../../routes/professor.routes";
import { DisciplinaAlunos } from "../../components/Professor/DisciplinaAlunos/DisciplinaAlunos";
import { StackNavigationProp } from "@react-navigation/stack";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard";
import { useTurmaDisciplinaDetalhes } from "../../hooks/useTurmaDisciplinaDetalhes";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";

type DisciplinaProfessorRouteProp = RouteProp<
  ProfessorStackParamList,
  "DisciplinaProfessor"
>;
type NavigationProp = StackNavigationProp<
  ProfessorStackParamList,
  "DisciplinaProfessor"
>;

export function DisciplinaProfessor() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DisciplinaProfessorRouteProp>();
  const { disciplinaId, turmaId } = route.params;
  const { disciplina, alunosDaTurma } = useTurmaDisciplinaDetalhes(
    turmaId,
    disciplinaId
  );

  const handleALunoPress = (alunoId: number) => {
    navigation.navigate("NotasDoAluno", {
      disciplinaId: disciplinaId,
      alunoId: alunoId,
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <ButtonVoltar />
        <Logo height={105} width={93} fontSize={20} />
      </View>

      <DisciplinaInfoCard
        disciplina={disciplina?.nome ?? "Disciplina não encontrada"}
      />
      <DisciplinaAlunos alunos={alunosDaTurma} onPress={handleALunoPress} />
    </ScrollView>
  );
}
