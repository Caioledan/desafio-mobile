import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {View, ActivityIndicator} from "react-native";
import { useAuth } from "../hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    const {user, loading} = useAuth();

    if (loading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />  
            </View>
        )
    }

    return (
        <NavigationContainer>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}