import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useTurmaComDisciplinas } from "./useTurmaComDisciplinas";
import { UseDisciplinasReturn } from "../interfaces/hooks.interface";

export function useDisciplinas(): UseDisciplinasReturn {
  const { user } = useContext(AuthContext);
  const { disciplinas: disciplinasDaTurma } = useTurmaComDisciplinas(
    user?.turmaId
  );

  return { disciplinasDaTurma };
}
