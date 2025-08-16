import { Turma } from "../interfaces/escola.interface";

export const mockTurmas: Turma[] = [
  {
    id: 1,
    nome: "Turma A",
    serie: "9º Ano",
    professorId: 2,
    alunosIds: [3],
    disciplinasIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    nome: "Turma B",
    serie: "9º Ano",
    professorId: 9,
    alunosIds: [3],
    disciplinasIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
];
