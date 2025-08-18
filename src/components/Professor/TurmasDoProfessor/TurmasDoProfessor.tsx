import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useProfessorTurmas } from "../../../hooks/useProfessorTurmas";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProfessorStackParamList } from "../../../routes/professor.routes";
import { TurmasButton } from "../TurmasButton/TurmasButton";
import { useAuth } from "../../../hooks/useAuth";

type ProfessorNavigationProp = StackNavigationProp<
  ProfessorStackParamList,
  "TurmasProfessor"
>;

export function TurmasDoProfessor() {
  const navigation = useNavigation<ProfessorNavigationProp>();
  const { user } = useAuth();
  const { turmas } = useProfessorTurmas(user?.id);

  const handleTurmaButton = (turmaId: number) => {
    navigation.navigate("TurmaDetalhesProfessor", { turmaId: turmaId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Suas turmas </Text>
      {turmas.map((turma) => (
        <TurmasButton
          key={turma.id}
          turmaSerie={turma.serie}
          turmaNome={turma.nome}
          onPress={() => handleTurmaButton(turma.id)}
        />
      ))}
    </View>
  );
}
