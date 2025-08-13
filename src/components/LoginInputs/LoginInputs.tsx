import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import Locker from "../../assets/images/padlock.png";
import User from "../../assets/images/user.png"
import { styles } from './styles';

export function LoginInputs() {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Image source={User} style={styles.image}/>
        <Text style={styles.text}>Matrícula</Text>
      </View>
      <TextInput placeholder='Digite sua matrícula' style={styles.input}></TextInput>
      <View style={styles.label}>
        <Image source={Locker} style={styles.image}/>
        <Text style={styles.text}>Senha</Text>
      </View>
      <TextInput placeholder='Digite sua senha' style={styles.input}></TextInput>
  </View>
  );
}