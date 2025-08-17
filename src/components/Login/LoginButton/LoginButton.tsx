import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface LoginButtonProps {
  onPress: () => void;
}

export function LoginButton({onPress}: LoginButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>Entrar</Text>
      </View>
    </TouchableOpacity>
  );
}