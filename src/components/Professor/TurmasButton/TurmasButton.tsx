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
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>{turmaSerie} {turmaNome}</Text>
      </View>
    </TouchableOpacity>
  );
}