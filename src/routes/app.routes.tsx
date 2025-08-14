import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TurmaAluno } from "../screens/Turma - Aluno/TurmaAluno";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return (
        <Navigator>
            <Screen name="Turma" component={TurmaAluno}/>
        </Navigator>
    )
}