import { User } from "./auth.interface";
import { Disciplina } from "./escola.interface";

export interface UseDisciplinasReturn {
  disciplinasDaTurma: Disciplina[];
}

export interface UseNotasReturn {
  disciplina: string;
  professor: string;
  aluno: string;
  notas: NotasData | null;
  user: User | null;
}

export type NotasData = {
  parcial: number;
  bimestral: number;
  total: number;
  situacao: string;
};
