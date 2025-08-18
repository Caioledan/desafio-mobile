import React, { useEffect, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { DiretorStackParamList } from "../../routes/diretor.routes";
import { Disciplina, Turma } from "../../interfaces/escola.interface";
import { getDisciplinaById, getTurmaByID, getUserById } from "../../database";
import { Logo } from "../../components/Logo/Logo";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard";
import { User } from "../../interfaces/auth.interface";
import { DisciplinaAlunos } from "../../components/Professor/DisciplinaAlunos/DisciplinaAlunos";
import { StackNavigationProp } from "@react-navigation/stack";

type DisciplinaDetalhesDiretorProp = RouteProp<
  DiretorStackParamList,
  "DisciplinaDetalhesDiretor"
>;
type NavigationProp = StackNavigationProp<DiretorStackParamList, "DisciplinaDetalhesDiretor">;

export function DisciplinaDetalhesDiretor() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DisciplinaDetalhesDiretorProp>();
  const { turmaId, disciplinaId } = route.params;
  const [turma, setTurma] = useState<Turma>();
  const [professor, setProfessor] = useState<User>();
  const [disciplina, setDisciplina] = useState<Disciplina>();

  useEffect(() => {
    const dadosTurma = getTurmaByID(turmaId);
    const dadosDisciplina = getDisciplinaById(disciplinaId);

    setTurma(dadosTurma);
    setDisciplina(dadosDisciplina);

    if (dadosDisciplina) {
      const dadosProfessor = getUserById(dadosDisciplina.professorId);

      setProfessor(dadosProfessor);
    }
  }, [turmaId, disciplinaId]);

  const alunosDaTurma = useMemo(() => {
    if (!turma) {
      return [];
    }

    return turma.alunosIds
      .map((id) => getUserById(id))
      .filter((aluno): aluno is User => aluno !== undefined);
  }, [turma]);

  const handleAlunoButton = (alunoId: number) => {
    navigation.navigate("AlunoDetalhesDiretor", {
      disciplinaId: disciplinaId,
      alunoId: alunoId,
    })
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Logo height={105} width={93} fontSize={20} />
      <DisciplinaInfoCard
        disciplina={disciplina?.nome ?? "Não encontrada"}
        professor={professor?.nome}
      />
      <DisciplinaAlunos alunos={alunosDaTurma} onPress={handleAlunoButton} />
    </ScrollView>
  );
}
