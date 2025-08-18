import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard";
import { NotasCard } from "../../components/NotasCard/NotasCard";
import { DiretorStackParamList } from "../../routes/diretor.routes";
import {
  getDisciplinaById,
  getNotaByAlunoDisciplina,
  getUserById,
} from "../../database";
import { Disciplina, Nota } from "../../interfaces/escola.interface";
import { User } from "../../interfaces/auth.interface";

type AlunoDetalhesDiretorRouteProp = RouteProp<
  DiretorStackParamList,
  "AlunoDetalhesDiretor"
>;

export function AlunoDetalhesDiretor() {
  const route = useRoute<AlunoDetalhesDiretorRouteProp>();
  const navigation = useNavigation();
  const { disciplinaId, alunoId } = route.params;
  const [disciplina, setDisciplina] = useState<Disciplina>();
  const [professor, setProfessor] = useState<User>();
  const [aluno, setAluno] = useState<User>();
  const [nota, setNota] = useState<Nota>();

  useEffect(() => {
    const dadosAluno = getUserById(alunoId);
    const dadosDisciplina = getDisciplinaById(disciplinaId);
    const dadosNota = getNotaByAlunoDisciplina(alunoId, disciplinaId);

    setAluno(dadosAluno);
    setDisciplina(dadosDisciplina);
    setNota(dadosNota);

    if (dadosDisciplina) {
      const dadosProfessor = getUserById(dadosDisciplina.professorId);
      setProfessor(dadosProfessor);
    }
  }, [disciplinaId, alunoId]);

  return (
    <View style={styles.container}>
      <Logo width={105} height={93} fontSize={20} />
      <DisciplinaInfoCard
        disciplina={disciplina?.nome || ""}
        professor={professor?.nome}
        aluno={aluno?.nome || ""}
      />
      {aluno ? (
        <NotasCard
          matricula={aluno.matricula}
          parcial={nota?.parcial?.toString() ?? ""}
          bimestral={nota?.bimestral?.toString() ?? ""}
          isEditing={false}
        />
      ) : (
        <Text style={{ marginTop: 80 }}>
          Nenhum dado encontrado para este aluno.
        </Text>
      )}
    </View>
  );
}
