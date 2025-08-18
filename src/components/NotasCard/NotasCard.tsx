import React from "react";
import { Image, Text, View, TextInput} from "react-native";
import { styles } from "./styles";
import Matricula from "../../assets/NotasCard/Matricula.png"
import Parcial from "../../assets/NotasCard/Parcial.png"
import Bimestral from "../../assets/NotasCard/Bimestral.png"
import Total from "../../assets/NotasCard/Total.png"
import Situacao from "../../assets/NotasCard/Situacao.png"

interface NotasCardProps {
  matricula: string;
  parcial: string;
  bimestral: string;
  isEditing: boolean;
  onParcialChange?: (text: string) => void;
  onBimestralChange?: (text: string) => void;
}

export function NotasCard({
  matricula,
  parcial,
  bimestral,
  isEditing,
  onParcialChange,
  onBimestralChange,
}: NotasCardProps) {
  let totalParaExibir: string = '--';
  let situacao: string = 'Cursando';
  let estiloSituacao = styles.cursando;

  if (parcial.trim() !== '' && bimestral.trim() !== '') {
    const numParcial = parseFloat(parcial) || 0;
    const numBimestral = parseFloat(bimestral) || 0;
    const totalCalculado = (numParcial + numBimestral)/2;

    totalParaExibir = totalCalculado.toFixed(1);


    if (totalCalculado >= 7) {
      situacao = 'Aprovado';
      estiloSituacao = styles.aprovado;
    } else {
      situacao = 'Recuperação';
      estiloSituacao = styles.recuperacao;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <View style={styles.titleContainer}><Image source={Matricula} style={styles.icon}/><Text style={styles.titleText}>Matrícula:</Text></View>
        <View style={styles.titleContainer}><Image source={Parcial} style={styles.icon}/><Text style={styles.titleText}>Parcial:</Text></View>
        <View style={styles.titleContainer}><Image source={Bimestral} style={styles.icon}/><Text style={styles.titleText}>Bimestral:</Text></View>
        <View style={styles.titleContainer}><Image source={Total} style={styles.icon}/><Text style={styles.titleText}>Total:</Text></View>
        <View style={styles.titleContainer}><Image source={Situacao} style={styles.icon}/><Text style={styles.titleText}>Situação:</Text></View>
      </View>

      <View style={styles.notasContainer}>
        <Text style={styles.titleText}>{matricula}</Text>
        
        {isEditing ? (
          <TextInput style={styles.input} value={parcial} onChangeText={onParcialChange} keyboardType="numeric" />
        ) : (
          <Text style={styles.titleText}>{parcial.trim() !== '' ? parseFloat(parcial).toFixed(1) : '--'}</Text>
        )}

        {isEditing ? (
          <TextInput style={styles.input} value={bimestral} onChangeText={onBimestralChange} keyboardType="numeric" />
        ) : (
          <Text style={styles.titleText}>{bimestral.trim() !== '' ? parseFloat(bimestral).toFixed(1) : '--'}</Text>
        )}

        <Text style={styles.titleText}>{totalParaExibir}</Text>
        <Text style={[styles.titleText, estiloSituacao, {fontSize: 16}]}>{situacao}</Text>
      </View>
    </View>
  );
}