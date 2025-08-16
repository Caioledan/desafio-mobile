import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { TurmaInfoProfessor } from "../../components/Professor/TurmaInfoProfessor/TurmaInfoProfessor";
import { useProfessorTurmas } from "../../hooks/useProfessorTurmas";
import { ProfessorStackParamList } from "../../routes/professor.routes";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Disciplina, Turma } from "../../interfaces/escola.interface";
import { getDisciplinaById, getTurmaByID } from "../../database";
import { DisciplinasProfessor } from "../../components/Professor/DisciplinasProfessor/DisciplinasProfessor";
import { useAuth } from "../../hooks/useAuth";

type TurmaProfessorRouteProp = RouteProp<
  ProfessorStackParamList,
  "TurmaProfessor"
>;

export function TurmaProfessor() {
  const route = useRoute<TurmaProfessorRouteProp>();
  const { turmaId } = route.params;
  const [turma, setTurma] = useState<Turma | undefined>(undefined);
  const { user } = useAuth();

  useEffect(() => {
    const dadosDaTurma = getTurmaByID(turmaId);
    setTurma(dadosDaTurma);
  }, [turmaId]);

  const disciplinasDoProfessor = useMemo(() => {
    if (!turma || !user) {
      return [];
    }

    return turma.disciplinasIds
      .map((id) => getDisciplinaById(id))
      .filter((d): d is Disciplina => d !== undefined)
      .filter((disciplina) => disciplina.professorId === user.id);
  }, [turma, user]);

  return (
    <View style={styles.container}>
      <Logo height={105} width={93} fontSize={20} />
      <TurmaInfoProfessor turma={turma} />
      <DisciplinasProfessor disciplinas={disciplinasDoProfessor} />
    </View>
  );
}
