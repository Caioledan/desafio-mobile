import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { DisciplinaButton } from '../DisciplinaButton/DisciplinaButton';
import Matematica from "../../assets/DisciplinaButtons/Matemática.png"
import Portugues from "../../assets/DisciplinaButtons/Português.png"
import Fisica from "../../assets/DisciplinaButtons/Física.png"
import Quimica from "../../assets/DisciplinaButtons/Química.png"
import Historia from "../../assets/DisciplinaButtons/História.png"
import Geografia from "../../assets/DisciplinaButtons/Geografia.png"
import Filosofia from "../../assets/DisciplinaButtons/Filosofia.png";
import Biologia from "../../assets/DisciplinaButtons/Biologia.png";
import Ingles from "../../assets/DisciplinaButtons/Inglês.png";
import Espanhol from "../../assets/DisciplinaButtons/Espanhol.png";

export function Disciplinas() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 24, fontWeight: "medium", marginBottom: 15,}}>Disciplinas da Turma</Text>
            <View style={styles.grid}>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Matematica} disciplina='Matemática' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Portugues} disciplina='Português' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Fisica} disciplina='Física' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Quimica} disciplina='Química' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Historia} disciplina='História' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Geografia} disciplina='Geografia' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Filosofia} disciplina='Filosofia' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Biologia} disciplina='Biologia' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Ingles} disciplina='Inglês' onPress={undefined}/>
                </View>
                <View style={styles.wrapper}>
                    <DisciplinaButton img={Espanhol} disciplina='Espanhol' onPress={undefined}/>
                </View>

            </View>

    </View>
  );
}