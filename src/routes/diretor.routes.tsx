import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { HomeDiretor } from "../screens/Home - Diretor/HomeDiretor";

export type DiretorStackParamList = {
    HomeDiretor: undefined;
}

const {Navigator, Screen} = createStackNavigator<DiretorStackParamList>()

export function DiretorRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="HomeDiretor" component={HomeDiretor}/>
        </Navigator>
    )
}