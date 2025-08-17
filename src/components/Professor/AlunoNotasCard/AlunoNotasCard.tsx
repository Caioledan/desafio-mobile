import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import Matricula from "../../../assets/NotasCard/Matricula.png";
import Parcial from "../../../assets/NotasCard/Parcial.png";
import Bimestral from "../../../assets/NotasCard/Bimestral.png";
import Total from "../../../assets/NotasCard/Total.png";
import Situacao from "../../../assets/NotasCard/Situacao.png";

interface NotasCardProfessorProsp {
    matricula: string;
    parcial: string;
    bimestral: string;
    onParcialChange: (text: string) => void;
    onBimestralChange: (text: string) => void;
    isEditing: boolean;
}

export function AlunoNotasCard({
  matricula,
  parcial,
  bimestral,
  isEditing,
  onParcialChange,
  onBimestralChange,
}: NotasCardProfessorProsp) {
    let totalExibido: string | number = '--';
    let situacao = "Cursando";
    let estiloSituacao = styles.cursando;

    if ( parcial.trim() !== '' && bimestral.trim() !== ''){
        const notaParcial = parseFloat(parcial) || 0;
        const notaBimestral = parseFloat(bimestral) || 0;
        const totalCalculado = (notaParcial + notaBimestral)/2;

        totalExibido = totalCalculado.toFixed(1);


        
        if(totalCalculado >= 7){
            situacao = 'Aprovado';
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
            <View style={styles.titleContainer}>
                <Image source={Parcial} style={styles.icon}/>
                <Text style={styles.titleText}>Parcial:</Text>
            </View>
            <View style={styles.titleContainer}>
                <Image source={Bimestral} style={styles.icon}/>
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

            {isEditing ? (
                <TextInput style={[styles.titleText, styles.input]}
                value={parcial}
                onChangeText={onParcialChange}
                keyboardType="numeric"
                placeholder="0.0"
                maxLength={4}/>
            ) : (
                <Text style={styles.titleText}>{parcial.trim() !== '' ? parseFloat(parcial).toFixed(1) : '--'}</Text>
            )}

            {isEditing ? (
                <TextInput style={[styles.titleText, styles.input]}
                value={bimestral}
                onChangeText={onBimestralChange}
                keyboardType="numeric"
                placeholder="0.0"
                maxLength={4}
                />
            ) : (
                <Text style={styles.titleText}>{bimestral.trim() !== '' ? parseFloat(bimestral).toFixed(1) : '--'}</Text>
            )}

            <Text style={styles.titleText}>{totalExibido}</Text>
            <Text style={[styles.titleText, {fontSize: 16}, estiloSituacao]}>{situacao}</Text>
        </View>
    </View>
  );
}