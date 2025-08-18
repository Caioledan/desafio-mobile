import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface AlunoButtonProps {
    alunoNome: string,
    onPress: () => void,
}

export function AlunoButton({alunoNome, onPress}: AlunoButtonProps) {
  const nomesAluno = (alunoNome || "").split(" ");
  const nomeAlunoAbreviado = nomesAluno.slice(0,2).join(" ");

  return (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.button}>
      <Text style={styles.text}>{nomeAlunoAbreviado}</Text>
    </View>
  </TouchableOpacity>
  );
}