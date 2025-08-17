import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../interfaces/auth.interface";
import {
  getDisciplinaById,
  getNotaByAlunoDisciplina,
  getUserById,
  getTurmaByID,
} from "../database";

type NotasData = {
  parcial: number;
  bimestral: number;
  total: number;
  situacao: string;
};

interface UseNotasReturn {
  isLoading: boolean;
  disciplina: string;
  professor: string;
  aluno: string;
  notas: NotasData | null;
  user: User | null;
}

export function useNotas(disciplinaId: number | undefined): UseNotasReturn {
  const { user }: { user: User | null } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [disciplina, setDisciplina] = useState("");
  const [professor, setProfessor] = useState("");
  const [aluno, setAluno] = useState("");
  const [notas, setNotas] = useState<NotasData | null>(null);

  useEffect(() => {
    if (disciplinaId === undefined) {
      setIsLoading(false);
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
          const totalNota = (notaInfo.parcial + notaInfo.bimestral) / 2;
          const situacaoFinal = totalNota >= 7 ? "Aprovado" : "Recuperação";
          setNotas({
            parcial: notaInfo.parcial,
            bimestral: notaInfo.bimestral,
            total: totalNota,
            situacao: situacaoFinal,
          });
        }
      }
      setIsLoading(false);
    };

    fetchNotasData();
  }, [user, disciplinaId]);

  return { isLoading, disciplina, professor, aluno, notas, user };
}
