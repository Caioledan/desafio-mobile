import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { TurmasProfessor } from "../screens/Turmas - Professor/TurmasProfessor";
import { TurmaProfessor } from "../screens/Turma - Professor/TurmaProfessor";

export type ProfessorStackParamList = {
    TurmasProfessor: undefined;
    TurmaProfessor: {turmaId: number};
};

const {Navigator, Screen} = createStackNavigator<ProfessorStackParamList>();

export function ProfessorRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="TurmasProfessor" component={TurmasProfessor}/>
            <Screen name="TurmaProfessor" component={TurmaProfessor}/>
        </Navigator>
    );
}