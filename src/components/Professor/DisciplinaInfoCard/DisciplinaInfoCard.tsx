import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface DisciplinaInfoCardProps {
    disciplinaNome: string;
    alunoNome: string;
}

export function DisciplinaInfoCard({alunoNome, disciplinaNome}:DisciplinaInfoCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>Disciplina:</Text>
        <Text style={styles.text}>{disciplinaNome}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Aluno:</Text>
        <Text style={styles.text}>{alunoNome}</Text>
      </View>
    </View>
  );
}