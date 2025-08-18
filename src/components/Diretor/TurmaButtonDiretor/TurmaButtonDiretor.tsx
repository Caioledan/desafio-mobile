import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface TurmaButtonDiretorProps {
    turmaSerie: string;
    turmaNome: string;
    onPress: () => void;
}

export function TurmaButtonDiretor({turmaSerie, turmaNome, onPress}:TurmaButtonDiretorProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.button}>
            <Text style={styles.text}>{turmaSerie} {turmaNome}</Text>
        </View>
    </TouchableOpacity>
  );
}