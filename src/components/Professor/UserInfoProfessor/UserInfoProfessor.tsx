import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { useAuth } from '../../../hooks/useAuth';

export function UserInfoProfessor() {
    const { user } = useAuth();

    if (!user){
        return null
    }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Bem Vindo(a), professor(a) {user.nome}</Text>
    </View>
  );
}