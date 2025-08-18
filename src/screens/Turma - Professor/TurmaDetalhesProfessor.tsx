import React from "react";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { TurmaInfoCard } from "../../components/TurmaInfoCard/TurmaInfoCard";
import { ProfessorStackParamList } from "../../routes/professor.routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { DisciplinasProfessor } from "../../components/Professor/DisciplinasProfessor/DisciplinasProfessor";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { useTurmaComDisciplinas } from "../../hooks/useTurmaComDisciplinas";
import { View } from "react-native";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";

type TurmaDetalhesProfessorRouteProp = RouteProp<
  ProfessorStackParamList,
  "TurmaDetalhesProfessor"
>;

type NavigationProp = StackNavigationProp<
  ProfessorStackParamList,
  "TurmaDetalhesProfessor"
>;

export function TurmaDetalhesProfessor() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<TurmaDetalhesProfessorRouteProp>();
  const { turmaId } = route.params;
  const { turma, disciplinas } = useTurmaComDisciplinas(turmaId);

  const handleDisciplinaButton = (disciplinaId: number) => {
    navigation.navigate("DisciplinaProfessor", {
      turmaId: turmaId,

      disciplinaId: disciplinaId,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <ButtonVoltar />
        <Logo height={105} width={93} fontSize={20} />
      </View>

      <TurmaInfoCard turma={turma} />
      <DisciplinasProfessor
        disciplinas={disciplinas}
        onPress={handleDisciplinaButton}
      />
    </ScrollView>
  );
}
