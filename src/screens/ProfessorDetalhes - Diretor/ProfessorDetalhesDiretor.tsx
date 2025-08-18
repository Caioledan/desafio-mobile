import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Logo } from '../../components/Logo/Logo';
import { DiretorStackParamList } from '../../routes/diretor.routes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { User } from '../../interfaces/auth.interface';
import { getUserById } from '../../database';
import { ProfessorDetalhesTurmas } from '../../components/Diretor/ProfessorDetalhesTurmas/ProfessorDetalhesTurmas';
import { ScrollView } from 'react-native-gesture-handler';

type ProfessorDetalhesRouteProp = RouteProp<DiretorStackParamList, "ProfessorDetalhes">;

export function ProfessorDetalhesDiretor() {
  const navigation = useNavigation();
  const route = useRoute<ProfessorDetalhesRouteProp>();
  const {professorId} = route.params;
  const [professor, setProfessor] = useState<User | undefined>()

  useEffect(() => {
    const dadosProfessor = getUserById(professorId);

    setProfessor(dadosProfessor);
  }, [professorId]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Logo height={105} width={93} fontSize={20} />
        <View style={styles.info}>
          <Text style={styles.title}>Nome do(a) professor(a):</Text>
          <Text style={styles.text}>{professor?.nome || "Carregando..."}</Text>
        </View>
        <ProfessorDetalhesTurmas professorId={professorId}/>
    </ScrollView>
  );
}