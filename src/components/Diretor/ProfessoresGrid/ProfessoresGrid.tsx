import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { DiretorStackParamList } from '../../../routes/diretor.routes';
import { useNavigation } from '@react-navigation/native';
import { useTodosOsProfessores } from '../../../hooks/useTodosOsProfessores';
import { ProfessorButton } from '../ProfessorButton/ProfessorButton';

type DiretorNavigationProp = StackNavigationProp<DiretorStackParamList>;

export function ProfessoresGrid() {
  const navigation = useNavigation<DiretorNavigationProp>();
  const {professores} = useTodosOsProfessores();

  const handleProfessorButton = (professorId: number) => {
    navigation.navigate("ProfessorDetalhes", {professorId: professorId});
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todos os Professores</Text>
      <View style={styles.grid}>
      {professores.map((professor) => (
        <View key={professor.id} style={styles.wrapper}>
          <ProfessorButton 
            professorNome={professor.nome}
            onPress={() => handleProfessorButton(professor.id)}
          />
        </View>
      ))}
      </View>
    </View>
  );
}