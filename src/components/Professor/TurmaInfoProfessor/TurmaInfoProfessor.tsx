import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { getUserById } from "../../../database";
import { Turma } from "../../../interfaces/escola.interface";

interface TurmaInfoCardProps {
  turma: Turma | undefined;
}

export function TurmaInfoProfessor({ turma }: TurmaInfoCardProps) {
  if (!turma) {
    return null;
  }

  const professorResponsavel = getUserById(turma.professorId);

  return (
    <View style={styles.container}>
      <View style={styles.serieContainer}>
        <Text style={styles.serie}>{turma.serie}</Text>
        <Text style={styles.turma}>{turma.nome}</Text>
      </View>
      <View style={styles.professorContainer}>
        <Text style={styles.responsavel}>Professor(a) responsável:</Text>
        <Text style={styles.professor}>{professorResponsavel?.nome}</Text>
      </View>
    </View>
  );
}
