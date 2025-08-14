import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface LoginButtonProps {
  onPress: () => void;
}

export function LoginButton({onPress}: LoginButtonProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
    </View>
  );
}