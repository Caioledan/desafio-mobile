import React from 'react';
import { Image, Text, View } from 'react-native';
import MinhaEscola from '../../assets/images/minhaEscola.png'
import { styles } from './styles';

export function Logo() {
  return (
    <View style={styles.container}>
        <Image source={MinhaEscola} style={styles.logo}/>
        <Text style={styles.text}>Minha Escola</Text>
    </View>
  );
}