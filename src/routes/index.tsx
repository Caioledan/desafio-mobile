import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { AlunoRoutes } from "./aluno.routes";
import { AuthRoutes } from "./auth.routes";
import { ProfessorRoutes } from "./professor.routes";
import { DiretorRoutes } from "./diretor.routes";

export function AppRoutesController() {
  const { user } = useAuth();

  if (user?.funcionalidade === "Professor") {
    return <ProfessorRoutes />;
  }
  if (user?.funcionalidade === "Aluno") {
    return <AlunoRoutes />;
  }
  if (user?.funcionalidade === "Diretor") {
    return <DiretorRoutes />;
  }
}

export function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutesController /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
