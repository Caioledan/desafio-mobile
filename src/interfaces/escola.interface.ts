
export interface Disciplina {
  id: number;
  nome: string;
}

export interface Nota {
  alunoId: number;
  disciplinaId: number;
  parcial: number;
  bimestral: number;
}

export interface Turma {
  id: number;
  nome: string;
  serie: string;
  professorId: number;
  alunosIds: number[];
  disciplinasIds: number[];
}