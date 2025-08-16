import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./styles";
import { Disciplina } from "../../../interfaces/escola.interface";
import { DisciplinaButtonProfessor } from "../DisciplinaButtonProfessor/DisciplinaButtonProfessor";

const disciplinaImages: { [key: string]: ImageSourcePropType } = {
  Matemática: require("../../../assets/DisciplinaButtons/Matemática.png"),
  Português: require("../../../assets/DisciplinaButtons/Português.png"),
  Física: require("../../../assets/DisciplinaButtons/Física.png"),
  Química: require("../../../assets/DisciplinaButtons/Química.png"),
  História: require("../../../assets/DisciplinaButtons/História.png"),
  Geografia: require("../../../assets/DisciplinaButtons/Geografia.png"),
  Filosofia: require("../../../assets/DisciplinaButtons/Filosofia.png"),
  Biologia: require("../../../assets/DisciplinaButtons/Biologia.png"),
  Inglês: require("../../../assets/DisciplinaButtons/Inglês.png"),
  Espanhol: require("../../../assets/DisciplinaButtons/Espanhol.png"),
};

interface DisciplinasProfessorProps {
  disciplinas: Disciplina[];
}

export function DisciplinasProfessor({
  disciplinas,
}: DisciplinasProfessorProps) {
  return (
    <View style={styles.container}>
      <Text>Suas Disciplinas na Turma</Text>
      <View>
        {disciplinas.map((disciplina) => (
          <View key={disciplina.id}>
            <DisciplinaButtonProfessor />
          </View>
        ))}
      </View>
    </View>
  );
}
