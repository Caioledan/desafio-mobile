import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Matricula from "../../../assets/NotasCard/Matricula.png"
import Parcial from "../../../assets/NotasCard/Parcial.png"
import Bimestral from "../../../assets/NotasCard/Bimestral.png"
import Total from "../../../assets/NotasCard/Total.png"
import Situacao from "../../../assets/NotasCard/Situacao.png"

interface NotasCardProps {
  matricula: string;
  parcial?: number;
  bimestral?: number;
}

export function NotasCard({matricula,parcial,bimestral}:NotasCardProps) {
  let totalExibido: string = "--";
  let situacao = "Cursando";
  let estiloSituacao = styles.cursando;

  if (parcial !== undefined && bimestral !== undefined){
    const totalCalculado = (parcial + bimestral)/2;

    totalExibido = totalCalculado.toFixed(1);

    if(totalCalculado >= 7){
      situacao = "Aprovado";
      estiloSituacao = styles.aprovado;
    }
    else {
      situacao = "Recuperação";
      estiloSituacao = styles.recuperacao;
    }
  }

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
        <Text style={styles.titleText}>{parcial?.toFixed(1) ?? '--'}</Text>
        <Text style={styles.titleText}>{bimestral?.toFixed(1) ?? '--'}</Text>
        <Text style={styles.titleText}>{totalExibido}</Text>
        <Text style={[styles.titleText, {fontSize: 16}, estiloSituacao]}>{situacao}</Text>
      </View>
    </View>
  );
}
