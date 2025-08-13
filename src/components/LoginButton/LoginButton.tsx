import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function LoginButton() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
    </View>
  );
}