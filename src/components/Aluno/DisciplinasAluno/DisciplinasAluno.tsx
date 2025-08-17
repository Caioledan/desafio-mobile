import { ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AlunoStackParamList } from "../../../routes/aluno.routes";
import { useDisciplinas } from "../../../hooks/useDisciplinas";
import { DisciplinaButton } from "../../DisciplinaButton/DisciplinaButton";


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

export function DisciplinasAluno() {
  const navigation = useNavigation<StackNavigationProp<AlunoStackParamList>>();
  const { disciplinasDaTurma } = useDisciplinas();

  function handleNavigationToNotas(id: number) {
    navigation.navigate("Notas", { disciplinaId: id });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "medium", marginBottom: 15 }}>
        Disciplinas da Turma
      </Text>
      <View style={styles.grid}>
        {disciplinasDaTurma.map((disciplina) => (
          <View style={styles.wrapper} key={disciplina.id}>
            <DisciplinaButton
              img={disciplinaImages[disciplina.nome]}
              disciplina={disciplina.nome}
              onPress={() => handleNavigationToNotas(disciplina.id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
