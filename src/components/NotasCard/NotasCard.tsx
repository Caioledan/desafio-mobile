import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Matricula from "../../assets/NotasCard/Matricula.png"
import Parcial from "../../assets/NotasCard/Parcial.png"
import Bimestral from "../../assets/NotasCard/Bimestral.png"
import Total from "../../assets/NotasCard/Total.png"
import Situacao from "../../assets/NotasCard/Situacao.png"

interface NotasCardProps {
  matricula: string;
  parcial: number;
  bimestral: number;
  total: number;
  situacao: string;
}

export function NotasCard({matricula,parcial,bimestral,total,situacao}:NotasCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <View style={styles.titleContainer}>
          <Image source={Matricula} style={styles.icon}/>
          <Text style={styles.titleText}>Matrícula:</Text>
        </View>
        <View style={styles.titleContainer} >
          <Image source={Parcial} style={styles.icon}/>
          <Text style={styles.titleText}>Parcial:</Text>
        </View>
        <View style={styles.titleContainer}>
          <Image source={Bimestral} style={[styles.icon, {width: 22, height: 22,}]}/>
          <Text style={styles.titleText}>Bimestral:</Text>
        </View>
        <View style={styles.titleContainer}>
          <Image source={Total} style={styles.icon}/>
          <Text style={styles.titleText}>Total:</Text>
        </View>
        <View style={styles.titleContainer}>
          <Image source={Situacao} style={styles.icon}/>
          <Text style={styles.titleText}>Situação:</Text>
        </View>
      </View>
      <View style={styles.NotasContainer}>
        <Text style={styles.titleText}>{matricula}</Text>
        <Text style={styles.titleText}>{parcial}</Text>
        <Text style={styles.titleText}>{bimestral}</Text>
        <Text style={styles.titleText}>{total}</Text>
        <Text style={[styles.titleText, situacao === 'Aprovado' ? styles.aprovado : styles.recuperacao]}>{situacao}</Text>
      </View>
    </View>
  );
}
