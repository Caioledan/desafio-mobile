import React from 'react';
import { ImageSourcePropType, Text, TouchableOpacity, View, Image } from 'react-native';

import { styles } from './styles';

interface DisciplinaButtonProfessorProps {
    img: ImageSourcePropType;
    disciplina: string;
    onPress?: () => void;
}

export function DisciplinaButtonProfessor({img, disciplina, onPress}: DisciplinaButtonProfessorProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View  style={styles.button}>
        <Image source={img}/>
        <Text style={styles.text}>{disciplina}</Text>  
      </View>
    </TouchableOpacity>
  );
}