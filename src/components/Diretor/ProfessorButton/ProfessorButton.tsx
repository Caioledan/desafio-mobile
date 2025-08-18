import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface ProfessorButtonProps {
    professorNome: string;
    onPress: () => void;
}

export function ProfessorButton({ professorNome, onPress }: ProfessorButtonProps) {
  const nomesProfessor = (professorNome || "").split(" ");
  const nomeProfessorAbreviado = nomesProfessor.slice(0,2).join(" ");

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.button}>
            <Text style={styles.text}>{nomeProfessorAbreviado}</Text>
        </View>
    </TouchableOpacity>
  );
}