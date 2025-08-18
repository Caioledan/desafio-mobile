import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { DiretorStackParamList } from '../../../routes/diretor.routes';
import { useNavigation } from '@react-navigation/native';
import { useTodasAsTurmas } from '../../../hooks/useTodasAsTurmas';
import { TurmaButtonDiretor } from '../TurmaButtonDiretor/TurmaButtonDiretor';

type DiretorNavigationProp = StackNavigationProp<DiretorStackParamList, "HomeDiretor">;

export function TurmasDoDiretor() {
    const navigation = useNavigation<DiretorNavigationProp>();
    const turmas = useTodasAsTurmas();

    const handleTurmaButton = (turmaId: number) => {
        navigation.navigate("TurmaDetalhesDiretor", { turmaId: turmaId})
    };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Todas as turmas</Text>
        <View style={styles.grid}>
            {turmas.map((turma) => (
                <View style={styles.wrapper} key={turma.id}>
                    <TurmaButtonDiretor 
                        turmaSerie={turma.serie}
                        turmaNome={turma.nome}
                        onPress={() => handleTurmaButton(turma.id)}
                    />
                </View>
            ))}
        </View>

    </View>
  );
}