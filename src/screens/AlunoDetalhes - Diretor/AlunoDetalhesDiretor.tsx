import React from "react";
import { View, Text, Button } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard";
import { NotasCard } from "../../components/NotasCard/NotasCard";
import { DiretorStackParamList } from "../../routes/diretor.routes";

import { useAlunoDisciplinaDetalhes } from "../../hooks/useAlunoDisciplinaDetalhes";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";

type AlunoDetalhesDiretorRouteProp = RouteProp<
  DiretorStackParamList,
  "AlunoDetalhesDiretor"
>;

export function AlunoDetalhesDiretor() {
  const route = useRoute<AlunoDetalhesDiretorRouteProp>();
  const { disciplinaId, alunoId } = route.params;
  const { aluno, disciplina, professor, nota } = useAlunoDisciplinaDetalhes(
    alunoId,
    disciplinaId
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonVoltar />
        <Logo height={105} width={93} fontSize={20} />
      </View>
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
