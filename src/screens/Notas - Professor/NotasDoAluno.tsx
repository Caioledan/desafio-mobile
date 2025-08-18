import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ProfessorStackParamList } from "../../routes/professor.routes";
import { NotasCard } from "../../components/NotasCard/NotasCard";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard";
import { useGerenciadorDeNotas } from "../../hooks/useGerenciadorDeNotas";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";

type NotasDoAlunoProps = RouteProp<ProfessorStackParamList, "NotasDoAluno">;

export function NotasDoAluno() {
  const route = useRoute<NotasDoAlunoProps>();
  const { disciplinaId, alunoId } = route.params;
  const {
    aluno,
    disciplina,
    parcial,
    setParcial,
    bimestral,
    setBimestral,
    isEditing,
    handleSalvarNotas,
    handleModificarNotas,
  } = useGerenciadorDeNotas(alunoId, disciplinaId);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonVoltar />
        <Logo height={105} width={93} fontSize={20} />
      </View>
      <DisciplinaInfoCard
        disciplina={disciplina?.nome || ""}
        aluno={aluno?.nome || ""}
      />
      {aluno && (
        <NotasCard
          matricula={aluno.matricula}
          parcial={parcial}
          bimestral={bimestral}
          isEditing={isEditing}
          onParcialChange={setParcial}
          onBimestralChange={setBimestral}
        />
      )}

      {isEditing ? (
        <TouchableOpacity onPress={handleSalvarNotas} style={styles.button}>
          <Text style={styles.text}>Salvar Alterações</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleModificarNotas} style={styles.button}>
          <Text style={styles.text}>Modificar Notas</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
