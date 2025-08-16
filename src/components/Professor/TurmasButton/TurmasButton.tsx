import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

interface TurmasButtonProps {
    turmaSerie: string;
    turmaNome: string;
    onPress: () => void;
}

export function TurmasButton({ turmaSerie, turmaNome, onPress }: TurmasButtonProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{turmaSerie} {turmaNome}</Text>
        </TouchableOpacity>
    </View>
  );
}