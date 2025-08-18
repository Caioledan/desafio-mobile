import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { DiretorStackParamList } from "../../routes/diretor.routes";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ProfessorDetalhesTurmas } from "../../components/Diretor/ProfessorDetalhesTurmas/ProfessorDetalhesTurmas";
import { ScrollView } from "react-native-gesture-handler";
import { useUserById } from "../../hooks/useUserById";
import { ButtonVoltar } from "../../components/ButtonVoltar/ButtonVoltar";

type ProfessorDetalhesRouteProp = RouteProp<
  DiretorStackParamList,
  "ProfessorDetalhes"
>;

export function ProfessorDetalhesDiretor() {
  const route = useRoute<ProfessorDetalhesRouteProp>();
  const { professorId } = route.params;
  const { user: professor } = useUserById(professorId);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <ButtonVoltar />
        <Logo height={105} width={93} fontSize={20} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Nome do(a) professor(a):</Text>
        <Text style={styles.text}>{professor?.nome || "Carregando..."}</Text>
      </View>
      <ProfessorDetalhesTurmas professorId={professorId} />
    </ScrollView>
  );
}
