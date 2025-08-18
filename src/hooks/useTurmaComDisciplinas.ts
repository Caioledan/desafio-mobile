import { useState, useEffect } from "react";
import { Disciplina, Turma } from "../interfaces/escola.interface";
import { getDisciplinaById, getTurmaByID } from "../database";

export function useTurmaComDisciplinas(turmaId?: number | null) {
  const [turma, setTurma] = useState<Turma | undefined>();
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  useEffect(() => {
    if (!turmaId) {
      setTurma(undefined);
      setDisciplinas([]);
      return;
    }

    const dadosDaTurma = getTurmaByID(turmaId);

    setTurma(dadosDaTurma);
  }, [turmaId]);

  useEffect(() => {
    if (!turma) {
      setDisciplinas([]);
      return;
    }

    const todasAsDisciplinas = turma.disciplinasIds
      .map((id) => getDisciplinaById(id))
      .filter((d): d is Disciplina => d !== undefined);

    setDisciplinas(todasAsDisciplinas);
  }, [turma]);

  return { turma, disciplinas };
}
