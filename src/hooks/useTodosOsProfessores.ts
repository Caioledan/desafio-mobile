import { useState, useEffect } from "react";
import { getTodosOsProfessores } from "../database";
import { User } from "../interfaces/auth.interface";

export function useTodosOsProfessores() {
  const [professores, setProfessores] = useState<User[]>([]);

  useEffect(() => {
    const todosOsProfessores = getTodosOsProfessores();
    setProfessores(todosOsProfessores);
  }, []);

  return { professores };
}
