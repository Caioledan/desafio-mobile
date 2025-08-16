import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { getProfessorById, getTurmaByID } from "../../database";

export function TurmaInfoAluno() {
  const { user } = useAuth();

  if (!user || !user.turmaId) {
    return null;
  }

  const turma = getTurmaByID(user.turmaId);
  const professor = turma ? getProfessorById(turma.professorId) : undefined;

  if (!turma) {
    return <Text>Turma não encontrada</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.serieContainer}>
        <Text style={styles.serie}>{turma.serie}</Text>
        <Text style={styles.turma}>{turma.nome}</Text>
      </View>
      <View style={styles.professorContainer}>
        <Text style={styles.responsavel}>Professor(a) responsável:</Text>
        <Text style={styles.professor}>{professor?.nome}</Text>
      </View>
    </View>
  );
}
