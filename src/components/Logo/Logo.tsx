import React from 'react';
import { Image, Text, View } from 'react-native';
import MinhaEscola from '../../assets/images/minhaEscola.png'
import { styles } from './styles';

type LogoProps = {
  height: number;
  width: number;
  fontSize: number;
}

export function Logo({height, width, fontSize}: LogoProps) {
  return (
    <View style={styles.container}>
        <Image source={MinhaEscola} style={{height, width}}/>
        <Text style={{fontSize}}>Minha Escola</Text>
    </View>
  );
}