import React, { useEffect, useMemo, useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { TurmaInfoCard } from "../../components/TurmaInfoCard/TurmaInfoCard";
import { DiretorStackParamList } from "../../routes/diretor.routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Disciplina, Turma } from "../../interfaces/escola.interface";
import { getDisciplinaById, getTurmaByID } from "../../database";
import { DisciplinasProfessor } from "../../components/Professor/DisciplinasProfessor/DisciplinasProfessor";
import { StackNavigationProp } from "@react-navigation/stack";

type TurmaDetalhesDiretorRouteProp = RouteProp<
  DiretorStackParamList,
  "TurmaDetalhesDiretor"
>;
type NavigationProp = StackNavigationProp<
  DiretorStackParamList,
  "TurmaDetalhesDiretor"
>;

export function TurmaDetalhesDiretor() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<TurmaDetalhesDiretorRouteProp>();
  const { turmaId } = route.params;
  const [turma, setTurma] = useState<Turma | undefined>(undefined);

  useEffect(() => {
    const dadosDaTurma = getTurmaByID(turmaId);
    setTurma(dadosDaTurma);
  }, [turmaId]);

  const todasAsDisciplinasDaTurma = useMemo(() => {
    if (!turma) {
      return [];
    }

    return turma.disciplinasIds
      .map((id) => getDisciplinaById(id))
      .filter((d): d is Disciplina => d !== undefined);
  }, [turma]);

  const handleDisciplinaButton = (disciplinaId: number) => {};

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Logo height={105} width={93} fontSize={20} />
      <TurmaInfoCard turma={turma} />
      <DisciplinasProfessor
        disciplinas={todasAsDisciplinasDaTurma}
        onPress={handleDisciplinaButton}
      />
    </ScrollView>
  );
}
