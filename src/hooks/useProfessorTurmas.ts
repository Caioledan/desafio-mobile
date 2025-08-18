import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getTurmasByProfessorId } from "../database";
import { Turma } from "../interfaces/escola.interface";

export function useProfessorTurmas(professorId?: number | null) {
  const [turmas, setTurmas] = useState<Turma[]>([]);

  useEffect(() => {
    if (!professorId) {
      setTurmas([]);
      return;
    }

    const professorTurmas = getTurmasByProfessorId(professorId);
    setTurmas(professorTurmas);
  }, [professorId]);

  return { turmas };
}
