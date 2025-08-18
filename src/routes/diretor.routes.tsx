import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeDiretor } from "../screens/Home - Diretor/HomeDiretor";
import { ProfessorDetalhesDiretor } from "../screens/ProfessorDetalhes - Diretor/ProfessorDetalhesDiretor";
import { TurmaDetalhesDiretor } from "../screens/TurmaDetalhes - Diretor/TurmaDetalhesDiretor";
import { DisciplinaDetalhesDiretor } from "../screens/DisciplinaDetalhes - Diretor/DisciplinaDetalhesDiretor";
import { AlunoDetalhesDiretor } from "../screens/AlunoDetalhes - Diretor/AlunoDetalhesDiretor";

export type DiretorStackParamList = {
  HomeDiretor: undefined;
  ProfessorDetalhes: { professorId: number };
  TurmaDetalhesDiretor: { turmaId: number };
  DisciplinaDetalhesDiretor: { turmaId: number; disciplinaId: number };
  AlunoDetalhesDiretor: { alunoId: number; disciplinaId: number };
};

const { Navigator, Screen } = createStackNavigator<DiretorStackParamList>();

export function DiretorRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeDiretor" component={HomeDiretor} />
      <Screen name="ProfessorDetalhes" component={ProfessorDetalhesDiretor} />
      <Screen name="TurmaDetalhesDiretor" component={TurmaDetalhesDiretor} />
      <Screen
        name="DisciplinaDetalhesDiretor"
        component={DisciplinaDetalhesDiretor}
      />
      <Screen name="AlunoDetalhesDiretor" component={AlunoDetalhesDiretor} />
    </Navigator>
  );
}
