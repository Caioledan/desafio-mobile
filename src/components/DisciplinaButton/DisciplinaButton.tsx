import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface DisciplinaButtonProps {
    img: ImageSourcePropType;
    disciplina: string;
    onPress?: () => void;
}

export function DisciplinaButton({img, disciplina, onPress}: DisciplinaButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Image source={img}/>
        <Text style={styles.text}>{disciplina}</Text>
      </View>
    </TouchableOpacity>
  );
}