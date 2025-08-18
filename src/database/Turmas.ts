import { Turma } from "../interfaces/escola.interface";

export const mockTurmas: Turma[] = [
  {
    id: 1,
    nome: "Turma A",
    serie: "9º Ano",
    professorId: 3,
    alunosIds: Array.from({ length: 30 }, (_, i) => 13 + i),
    disciplinasIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    nome: "Turma B",
    serie: "9º Ano",
    professorId: 9,
    alunosIds: Array.from({ length: 30 }, (_, i) => 43 + i),
    disciplinasIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    id: 3,
    nome: "Turma C",
    serie: "8º Ano",
    professorId: 4,
    alunosIds: Array.from({ length: 30 }, (_, i) => 73 + i),
    disciplinasIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
  {
    id: 4,
    nome: "Turma D",
    serie: "8º Ano",
    professorId: 5,
    alunosIds: Array.from({ length: 30 }, (_, i) => 103 + i),
    disciplinasIds: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
];