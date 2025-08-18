import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TurmasProfessor } from "../screens/Turmas - Professor/TurmasProfessor";
import { TurmaDetalhesProfessor } from "../screens/Turma - Professor/TurmaDetalhesProfessor";
import { DisciplinaProfessor } from "../screens/Disciplina - Professor/DisciplinaProfessor";
import { NotasDoAluno } from "../screens/Notas - Professor/NotasDoAluno";

export type ProfessorStackParamList = {
  TurmasProfessor: undefined;
  TurmaDetalhesProfessor: { turmaId: number };
  DisciplinaProfessor: { turmaId: number; disciplinaId: number };
  NotasDoAluno: { disciplinaId: number; alunoId: number };
};

const { Navigator, Screen } = createStackNavigator<ProfessorStackParamList>();

export function ProfessorRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="TurmasProfessor" component={TurmasProfessor} />
      <Screen
        name="TurmaDetalhesProfessor"
        component={TurmaDetalhesProfessor}
      />
      <Screen name="DisciplinaProfessor" component={DisciplinaProfessor} />
      <Screen name="NotasDoAluno" component={NotasDoAluno} />
    </Navigator>
  );
}
