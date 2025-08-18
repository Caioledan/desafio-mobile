import { useMemo } from "react";
import { useTurmaComDisciplinas } from "./useTurmaComDisciplinas";

export function useDisciplinasPorProfessorETurma(
  turmaId?: number | null,
  professorId?: number | null
) {
  const { turma, disciplinas } = useTurmaComDisciplinas(turmaId);

  const disciplinasDoProfessor = useMemo(() => {
    if (!professorId) {
      return [];
    }
    return disciplinas.filter(
      (disciplina) => disciplina.professorId === professorId
    );
  }, [disciplinas, professorId]);

  return { turma, disciplinasDoProfessor };
}
