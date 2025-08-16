import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { User } from '../interfaces/auth.interface';
import { getDisciplinaById, getNotaByAlunoDisciplina, getProfessorById, getTurmaByID } from '../database';

type NotasData = {
  parcial: number;
  bimestral: number;
  total: number;
  situacao: string;
}

interface UseNotasReturn {
  isLoading: boolean;
  disciplina: string;
  professor: string;
  aluno: string;
  notas: NotasData | null;
  user: User | null;
}

export function useNotas(disciplinaId: number): UseNotasReturn {
  const { user }: { user: User | null } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [disciplina, setDisciplina] = useState('');
  const [professor, setProfessor] = useState('');
  const [aluno, setAluno] = useState('');
  const [notas, setNotas] = useState<NotasData | null>(null);

  useEffect(() => {
    const fetchNotasData = () => {
      if (user && user.funcionalidade === "Aluno" && user.turmaId) {
        setAluno(user.nome);

        const disciplinaInfo = getDisciplinaById(disciplinaId);
        if (disciplinaInfo) setDisciplina(disciplinaInfo.nome);

        const turmaInfo = getTurmaByID(user.turmaId);
        if (turmaInfo) {
          const professorInfo = getProfessorById(turmaInfo.professorId);
          if (professorInfo) setProfessor(professorInfo.nome);
        }

        const notaInfo = getNotaByAlunoDisciplina(user.id, disciplinaId);
        if (notaInfo) {
          const totalNota = notaInfo.parcial + notaInfo.bimestral;
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