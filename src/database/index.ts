import { User } from "../interfaces/auth.interface";
import { Disciplina, Nota, Turma } from "../interfaces/escola.interface";
import { mockDisciplinas } from "./Disciplinas";
import { mockNotas } from "./Notas";
import { mockTurmas } from "./Turmas";
import { mockUsers } from "./Users";

export function getUserByCredentials(matricula:string, senha: string): User | undefined {
    return mockUsers.find(user => user.matricula === matricula && user.senha === senha);
}

export function getTurmaByID(id: number): Turma | undefined {
    return mockTurmas.find(turma => turma.id === id);
}

export function getUserById(id: number): User | undefined {
    return mockUsers.find(professor => professor.id === id);
}

export function getDisciplinaById(id: number): Disciplina | undefined {
    return mockDisciplinas.find(disciplina => disciplina.id === id);
}

export function getNotaByAlunoDisciplina(alunoId: number, disciplinaId: number){
    return mockNotas.find(nota => nota.alunoId === alunoId && nota.disciplinaId === disciplinaId);
}

export function getTurmasByProfessorId(professorId: number){
const professorDisciplinaIds = mockDisciplinas.filter(disciplina => disciplina.professorId === professorId).map(disciplina => disciplina.id);

  if (professorDisciplinaIds.length === 0) {
    return [];
  }
  
  return mockTurmas.filter(turma =>
    turma.disciplinasIds.some(disciplinaId => professorDisciplinaIds.includes(disciplinaId))
  );
}

export function salvarNota( alunoId: number, disciplinaId: number, notaParcial: number, notaBimestral: number){
  const notaExistente = mockNotas.find((nota) => nota.alunoId === alunoId && nota.disciplinaId === disciplinaId);

  if (notaExistente) {
    notaExistente.parcial = notaParcial;
    notaExistente.bimestral = notaBimestral;
  }
  else {
    const novaNota: Nota = {
      alunoId: alunoId,
      disciplinaId: disciplinaId,
      parcial: notaParcial,
      bimestral: notaBimestral,
    };
    
    mockNotas.push(novaNota);
  }
}