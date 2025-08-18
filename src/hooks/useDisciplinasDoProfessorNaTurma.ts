import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { useTurmaComDisciplinas } from "./useTurmaComDisciplinas";

export function useDisciplinasDoProfessorNaTurma(turmaId?: number | null) {
  const { user } = useAuth();
  const { turma, disciplinas } = useTurmaComDisciplinas(turmaId);

  const disciplinasDoProfessor = useMemo(() => {
    if (!user) {
      return [];
    }
    return disciplinas.filter(
      (disciplina) => disciplina.professorId === user.id
    );
  }, [disciplinas, user]);

  return { turma, disciplinasDoProfessor };
}
