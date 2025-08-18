import { useEffect, useMemo, useState } from "react";
import { getDisciplinaById, getTurmaByID, getUserById } from "../database";
import { Disciplina, Turma } from "../interfaces/escola.interface";
import { User } from "../interfaces/auth.interface";

export function useTurmaDisciplinaDetalhes(
  turmaId: number,
  disciplinaId: number
) {
  const [disciplina, setDisciplina] = useState<Disciplina | undefined>();
  const [turma, setTurma] = useState<Turma | undefined>(undefined);
  const [professor, setProfessor] = useState<User | undefined>();

  useEffect(() => {
    const dadosDisciplina = getDisciplinaById(disciplinaId);
    const dadosTurma = getTurmaByID(turmaId);

    if (dadosDisciplina) {
      const dadosProfessor = getUserById(dadosDisciplina.professorId);
      setProfessor(dadosProfessor);
    } else {
      setProfessor(undefined);
    }

    setDisciplina(dadosDisciplina);
    setTurma(dadosTurma);
  }, [disciplinaId, turmaId]);

  const alunosDaTurma = useMemo(() => {
    if (!turma) {
      return [];
    }

    return turma.alunosIds
      .map((alunoId) => getUserById(alunoId))
      .filter((aluno): aluno is User => aluno !== undefined);
  }, [turma]);

  return { disciplina, alunosDaTurma, professor };
}
