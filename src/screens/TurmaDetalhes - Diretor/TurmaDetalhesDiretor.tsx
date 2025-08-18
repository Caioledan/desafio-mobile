import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { TurmaInfoCard } from "../../components/TurmaInfoCard/TurmaInfoCard";
import { DiretorStackParamList } from "../../routes/diretor.routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { DisciplinasProfessor } from "../../components/Professor/DisciplinasProfessor/DisciplinasProfessor";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTurmaComDisciplinas } from "../../hooks/useTurmaComDisciplinas";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";

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
  const { turma, disciplinas } = useTurmaComDisciplinas(turmaId);

  const handleDisciplinaButton = (disciplinaId: number) => {
    navigation.navigate("DisciplinaDetalhesDiretor", {
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
