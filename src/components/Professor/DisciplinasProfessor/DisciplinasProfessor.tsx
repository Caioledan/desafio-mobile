import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./styles";
import { DisciplinaButton } from "../../DisciplinaButton/DisciplinaButton";
import { DisciplinasProfessorProps } from "../../../interfaces/components.interface";

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

export function DisciplinasProfessor({
  disciplinas,
  onPress,
}: DisciplinasProfessorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Suas Disciplinas na Turma</Text>
      <View style={styles.grid}>
        {disciplinas.map((disciplina) => (
          <View key={disciplina.id} style={styles.wrapper}>
            <DisciplinaButton
              img={disciplinaImages[disciplina.nome]}
              disciplina={disciplina.nome}
              onPress={() => onPress(disciplina.id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
