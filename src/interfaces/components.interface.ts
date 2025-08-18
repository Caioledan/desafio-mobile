import { User } from "./auth.interface";
import { Disciplina } from "./escola.interface";

export interface ProfessorButtonProps {
  professorNome: string;
  onPress: () => void;
}

export interface TurmaButtonDiretorProps {
  turmaSerie: string;
  turmaNome: string;
  onPress: () => void;
}

export interface InfoCardProps {
  disciplina: string;
  aluno?: string;
  professor?: string;
}

export interface LoginButtonProps {
  onPress: () => void;
}

export interface NotasCardProps {
  matricula: string;
  parcial: string;
  bimestral: string;
  isEditing: boolean;
  onParcialChange?: (text: string) => void;
  onBimestralChange?: (text: string) => void;
}

export interface AlunosTurmaProps {
  alunos: User[];
  onPress: (alunoId: number) => void;
}

export interface DisciplinasProfessorProps {
  disciplinas: Disciplina[];
  onPress: (disciplinaId: number) => void;
}

export interface TurmasButtonProps {
  turmaSerie: string;
  turmaNome: string;
  onPress: () => void;
}
