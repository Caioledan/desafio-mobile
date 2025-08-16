import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TurmaAluno } from "../screens/Turma - Aluno/TurmaAluno";
import { NotasAluno } from "../screens/Notas - Aluno/NotasAluno";

export type AppStackParamList = {
  Disciplinas: undefined;
  Notas: { disciplinaId: number };
};

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Turma" component={TurmaAluno}/>
            <Screen name="Notas" component={NotasAluno}/>
        </Navigator>
    )
}