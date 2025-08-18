import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function LoginText() {
  return (
    <View style={styles.container}>
      <Text>Não definiu sua senha ainda?</Text>
      <TouchableOpacity>
        <Text style={styles.text}>Defina aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
