import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { DisciplinaInfoCard } from "../../components/DisciplinaInfoCard/DisciplinaInfoCard"
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNotas } from "../../hooks/useNotas";
import { AlunoStackParamList } from "../../routes/aluno.routes";
import { NotasCard } from "../../components/NotasCard/NotasCard";

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
      <DisciplinaInfoCard
        disciplina={disciplina}
        professor={professor}
        aluno={aluno}
      />
      {user && notas ? (
        <NotasCard 
          matricula={user.matricula}
          parcial={notas.parcial?.toString() ?? ""}
          bimestral={notas.bimestral?.toString() ?? ""}
          isEditing={false}
        />
      ) : (
        <Text style={{ marginTop: 80 }}>Nenhuma nota encontrada.</Text>
      )}
    </View>
  );
}
