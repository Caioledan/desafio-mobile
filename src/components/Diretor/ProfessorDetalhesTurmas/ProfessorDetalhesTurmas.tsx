import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Turma } from '../../../interfaces/escola.interface';
import { getTurmasByProfessorId } from '../../../database';
import { TurmaButtonDiretor } from '../TurmaButtonDiretor/TurmaButtonDiretor';
import { StackNavigationProp } from '@react-navigation/stack';
import { DiretorStackParamList } from '../../../routes/diretor.routes';
import { useNavigation } from '@react-navigation/native';

interface ProfessorDetalhesTurmasProps {
    professorId: number;
}

type NavigationProp = StackNavigationProp<DiretorStackParamList>;

export function ProfessorDetalhesTurmas({ professorId }: ProfessorDetalhesTurmasProps) {
    const navigation = useNavigation<NavigationProp>();
    const [turmas, setTurmas] = useState<Turma[]>([]);

    useEffect(() => {
        const professorTurmas = getTurmasByProfessorId(professorId);

        setTurmas(professorTurmas);
    }, [professorId]);

    const handleTurmaButton = (turmaId: number) => {
        navigation.navigate("TurmaDetalhesDiretor", { turmaId: turmaId});
    }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Turmas do(a) professor(a)</Text>
        <View style={styles.grid}>
            {turmas.length > 0 ? (
                turmas.map(turma => (
                    <View key={turma.id} style={styles.wrapper}>
                        <TurmaButtonDiretor
                            turmaSerie={turma.serie}
                            turmaNome={turma.nome}
                            onPress={() => handleTurmaButton(turma.id)}
                        />
                    </View>
                ))
            ): (
                <Text>O Professor não tem turmas</Text>
            )}
        </View>
    </View>
  );
}