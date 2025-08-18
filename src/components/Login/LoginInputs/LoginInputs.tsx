import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import Locker from "../../../assets/images/padlock.png";
import User from "../../../assets/images/user.png";
import { styles } from "./styles";

interface LoginInputsProps {
  matriculaValue: string;
  onMatriculaChange: (text: string) => void;
  senhaValue: string;
  onSenhaChange: (text: string) => void;
}

export function LoginInputs({
  matriculaValue,
  onMatriculaChange,
  senhaValue,
  onSenhaChange,
}: LoginInputsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Image source={User} style={styles.image} />
        <Text style={styles.text}>Matrícula</Text>
      </View>
      <TextInput
        placeholder="Digite sua matrícula"
        value={matriculaValue}
        onChangeText={onMatriculaChange}
        style={styles.input}
      ></TextInput>
      <View style={styles.label}>
        <Image source={Locker} style={styles.image} />
        <Text style={styles.text}>Senha</Text>
      </View>
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        value={senhaValue}
        onChangeText={onSenhaChange}
        style={styles.input}
      ></TextInput>
    </View>
  );
}
