import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TurmaAluno } from "../screens/Turma - Aluno/TurmaAluno";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return (
        <Navigator>
            <Screen name="Turma" component={TurmaAluno} options={{
                tabBarIcon: () => (<MaterialIcons name="groups" size={30}/> ),
                headerShown: false,
            }}/>
        </Navigator>
    )
}