import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AlunoButton } from "../AlunoButton/AlunoButton";
import { AlunosTurmaProps } from "../../../interfaces/components.interface";

export function DisciplinaAlunos({ alunos, onPress }: AlunosTurmaProps) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "medium", marginTop: 30 }}>
        Alunos da Turma
      </Text>
      <View style={styles.grid}>
        {[...alunos]
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .map((aluno) => (
            <View style={styles.wrapper} key={aluno.id}>
              <AlunoButton
                alunoNome={aluno.nome}
                onPress={() => onPress(aluno.id)}
              />
            </View>
          ))}
      </View>
    </View>
  );
}
