import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getTurmasByProfessorId } from '../database';
import { Turma } from '../interfaces/escola.interface';

export function useProfessorTurmas() {
  const { user } = useContext(AuthContext);
  const [turmas, setTurmas] = useState<Turma[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && user.funcionalidade === 'Professor') {
      const professorTurmas = getTurmasByProfessorId(user.id);
      setTurmas(professorTurmas);
    }
    setIsLoading(false);
  }, [user]);

  return { turmas, isLoading };
}