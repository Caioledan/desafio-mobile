import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface DisciplinaInfoProfessorProps {
    disciplinaNome: string;
}

export function DisciplinaInfoProfessor({disciplinaNome}: DisciplinaInfoProfessorProps) {
    if (!disciplinaNome){
        return null;
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Disciplina:</Text>
        <Text style={styles.text}>{disciplinaNome}</Text>
    </View>
  );
}