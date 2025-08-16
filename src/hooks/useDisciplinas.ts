import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Disciplina } from '../interfaces/escola.interface';
import { getTurmaByID, getDisciplinaById } from '../database';

interface UseDisciplinasReturn {
  disciplinasDaTurma: Disciplina[];
  isLoading: boolean;
}

export function useDisciplinas(): UseDisciplinasReturn {

  const { user } = useContext(AuthContext);
  const [disciplinasDaTurma, setDisciplinasDaTurma] = useState<Disciplina[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDisciplinas = () => {
      if (user && user.turmaId) {
        const turma = getTurmaByID(user.turmaId);

        if (turma) {
          const disciplinasCompletas = turma.disciplinasIds
            .map(id => getDisciplinaById(id))
            .filter((d): d is Disciplina => d !== undefined);
          
          setDisciplinasDaTurma(disciplinasCompletas);
        }
      }
      setIsLoading(false);
    };

    fetchDisciplinas();
  }, [user]);

  return { disciplinasDaTurma, isLoading };
}