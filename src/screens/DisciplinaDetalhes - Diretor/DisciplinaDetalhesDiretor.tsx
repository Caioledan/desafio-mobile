import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { DiretorStackParamList } from "../../routes/diretor.routes";
import { Logo } from "../../components/Logo/Logo";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard";
import { DisciplinaAlunos } from "../../components/Professor/DisciplinaAlunos/DisciplinaAlunos";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTurmaDisciplinaDetalhes } from "../../hooks/useTurmaDisciplinaDetalhes";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";

type DisciplinaDetalhesDiretorProp = RouteProp<
  DiretorStackParamList,
  "DisciplinaDetalhesDiretor"
>;
type NavigationProp = StackNavigationProp<
  DiretorStackParamList,
  "DisciplinaDetalhesDiretor"
>;

export function DisciplinaDetalhesDiretor() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DisciplinaDetalhesDiretorProp>();
  const { turmaId, disciplinaId } = route.params;
  const { disciplina, professor, alunosDaTurma } = useTurmaDisciplinaDetalhes(
    turmaId,
    disciplinaId
  );

  const handleAlunoButton = (alunoId: number) => {
    navigation.navigate("AlunoDetalhesDiretor", {
      disciplinaId: disciplinaId,
      alunoId: alunoId,
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
      <DisciplinaInfoCard
        disciplina={disciplina?.nome ?? "Não encontrada"}
        professor={professor?.nome}
      />
      <DisciplinaAlunos alunos={alunosDaTurma} onPress={handleAlunoButton} />
    </ScrollView>
  );
}
