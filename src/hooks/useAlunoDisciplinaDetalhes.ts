import { useState, useEffect } from "react";
import { Disciplina, Nota } from "../interfaces/escola.interface";
import { User } from "../interfaces/auth.interface";
import {
  getDisciplinaById,
  getNotaByAlunoDisciplina,
  getUserById,
} from "../database";

export function useAlunoDisciplinaDetalhes(
  alunoId: number,
  disciplinaId: number
) {
  const [aluno, setAluno] = useState<User>();
  const [disciplina, setDisciplina] = useState<Disciplina>();
  const [professor, setProfessor] = useState<User>();
  const [nota, setNota] = useState<Nota>();

  useEffect(() => {
    if (!alunoId || !disciplinaId) {
      return;
    }

    const dadosAluno = getUserById(alunoId);
    const dadosDisciplina = getDisciplinaById(disciplinaId);
    const dadosNota = getNotaByAlunoDisciplina(alunoId, disciplinaId);

    setAluno(dadosAluno);
    setDisciplina(dadosDisciplina);
    setNota(dadosNota);

    if (dadosDisciplina) {
      const dadosProfessor = getUserById(dadosDisciplina.professorId);

      setProfessor(dadosProfessor);
    } else {
      setProfessor(undefined);
    }
  }, [alunoId, disciplinaId]);

  return { aluno, disciplina, professor, nota };
}
