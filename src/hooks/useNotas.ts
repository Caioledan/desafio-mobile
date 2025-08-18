import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../interfaces/auth.interface";
import {
  getDisciplinaById,
  getNotaByAlunoDisciplina,
  getUserById,
} from "../database";
import { NotasData, UseNotasReturn } from "../interfaces/hooks.interface";

export function useNotas(disciplinaId: number | undefined): UseNotasReturn {
  const { user }: { user: User | null } = useContext(AuthContext);
  const [disciplina, setDisciplina] = useState("");
  const [professor, setProfessor] = useState("");
  const [aluno, setAluno] = useState("");
  const [notas, setNotas] = useState<NotasData | null>(null);

  useEffect(() => {
    if (disciplinaId === undefined) {
      return;
    }

    const fetchNotasData = () => {
      if (user && user.funcionalidade === "Aluno" && user.turmaId) {
        setAluno(user.nome);

        const disciplinaInfo = getDisciplinaById(disciplinaId);
        if (disciplinaInfo) setDisciplina(disciplinaInfo.nome);

        if (disciplinaInfo?.professorId !== undefined) {
          const professorInfo = getUserById(disciplinaInfo?.professorId);
          if (professorInfo) {
            setProfessor(professorInfo.nome);
          }
        }

        const notaInfo = getNotaByAlunoDisciplina(user.id, disciplinaId);
        if (notaInfo) {
          const notaParcial = notaInfo.parcial ?? 0;
          const notaBimestral = notaInfo.bimestral ?? 0;
          const totalNota = (notaParcial + notaBimestral) / 2;
          const situacaoFinal = totalNota >= 7 ? "Aprovado" : "Recuperação";
          setNotas({
            parcial: notaParcial,
            bimestral: notaBimestral,
            total: totalNota,
            situacao: situacaoFinal,
          });
        }
      }
    };

    fetchNotasData();
  }, [user, disciplinaId]);

  return { disciplina, professor, aluno, notas, user };
}
