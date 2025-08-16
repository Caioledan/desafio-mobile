import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { TurmasProfessor } from "../screens/Turmas - Professor/TurmasProfessor";

export type ProfessorStackParamList = {
    TurmasProfessor: undefined;
};

const {Navigator, Screen} = createStackNavigator<ProfessorStackParamList>();

export function ProfessorRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="TurmasProfessor" component={TurmasProfessor}/>
        </Navigator>
    );
}