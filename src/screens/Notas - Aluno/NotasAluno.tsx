import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { DisciplinaInfoAluno } from "../../components/Aluno/DisciplinaInfoAluno/DisciplinaInfoAluno";
import { NotasCard } from "../../components/Aluno/NotasCard/NotasCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNotas } from "../../hooks/useNotas";
import { AlunoStackParamList } from "../../routes/aluno.routes";

type NotasAlunoRouteProp = RouteProp<AlunoStackParamList, "Notas">;

export function NotasAluno() {
  const route = useRoute<NotasAlunoRouteProp>();
  const disciplinaId = route.params?.disciplinaId;
  const { isLoading, disciplina, professor, aluno, notas, user } =
    useNotas(disciplinaId);

  if (isLoading || !disciplinaId) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Logo width={105} height={93} fontSize={20} />
      <DisciplinaInfoAluno
        disciplina={disciplina}
        professor={professor}
        aluno={aluno}
      />
      {user && notas ? (
        <NotasCard
          matricula={user.matricula}
          parcial={notas.parcial}
          bimestral={notas.bimestral}
        />
      ) : (
        <Text style={{ marginTop: 80 }}>Nenhuma nota encontrada.</Text>
      )}
    </View>
  );
}
