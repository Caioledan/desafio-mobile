import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TurmaButtonDiretorProps } from "../../../interfaces/components.interface";

export function TurmaButtonDiretor({
  turmaSerie,
  turmaNome,
  onPress,
}: TurmaButtonDiretorProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>
          {turmaSerie} {turmaNome}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
