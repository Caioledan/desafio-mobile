import React, { useEffect, useMemo, useState } from "react";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { TurmaInfoCard } from "../../components/TurmaInfoCard/TurmaInfoCard";
import { ProfessorStackParamList } from "../../routes/professor.routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Disciplina, Turma } from "../../interfaces/escola.interface";
import { getDisciplinaById, getTurmaByID } from "../../database";
import { DisciplinasProfessor } from "../../components/Professor/DisciplinasProfessor/DisciplinasProfessor";
import { useAuth } from "../../hooks/useAuth";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";
import { View } from "react-native";
import { useDisciplinasDoProfessorNaTurma } from "../../hooks/useDisciplinasDoProfessorNaTurma";

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
  const {turma, disciplinasDoProfessor} = useDisciplinasDoProfessorNaTurma(turmaId);

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
    >
      <View style={styles.header}>
        <ButtonVoltar />
        <Logo height={105} width={93} fontSize={20} />
      </View>
      <TurmaInfoCard turma={turma} />
      <DisciplinasProfessor
        disciplinas={disciplinasDoProfessor}
        onPress={handleDisciplinaButton}
      />
    </ScrollView>
  );
}
