import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { HomeDiretor } from "../screens/Home - Diretor/HomeDiretor";
import { ProfessorDetalhesDiretor } from "../screens/ProfessorDetalhes - Diretor/ProfessorDetalhesDiretor";
import { TurmaDetalhesDiretor } from "../screens/TurmaDetalhes - Diretor/TurmaDetalhesDiretor";


export type DiretorStackParamList = {
    HomeDiretor: undefined;
    ProfessorDetalhes: {professorId: number};
    TurmaDetalhesDiretor: {turmaId: number};
}

const {Navigator, Screen} = createStackNavigator<DiretorStackParamList>()

export function DiretorRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="HomeDiretor" component={HomeDiretor}/>
            <Screen name="ProfessorDetalhes" component={ProfessorDetalhesDiretor}/>
            <Screen name="TurmaDetalhesDiretor" component={TurmaDetalhesDiretor}/>
        </Navigator>
    )
}