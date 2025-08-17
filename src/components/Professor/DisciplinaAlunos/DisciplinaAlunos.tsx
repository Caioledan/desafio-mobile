import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { User } from '../../../interfaces/auth.interface';
import { AlunoButton } from '../AlunoButton/AlunoButton';

interface AlunosTurmaProps {
    alunos: User[],
    onPress: (alunoId: number) => void,
}

export function DisciplinaAlunos({alunos, onPress}: AlunosTurmaProps) {
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "medium",}}>Alunos da Turma</Text>
        <View style={styles.grid}>
            {alunos.map((aluno) => (
                <View style={styles.wrapper} key={aluno.id}>
                    <AlunoButton alunoNome={aluno.nome} onPress={() => onPress(aluno.id)}/>
                </View>
            ))}
        </View>
    </View>
  );
}