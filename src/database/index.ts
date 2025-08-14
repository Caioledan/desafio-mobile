import { User } from "../interfaces/auth.interface";
import { Turma } from "../interfaces/escola.interface";
import { mockTurmas } from "./Turmas";
import { mockUsers } from "./Users";

export function getUserByCredentials(matricula:string, senha: string): User | undefined {
    return mockUsers.find(user => user.matricula === matricula && user.senha === senha);
}

export function getTurmaByID(id: number): Turma | undefined {
    return mockTurmas.find(turma => turma.id === id);
}

export function getProfessorById(id: number): User | undefined {
    return mockUsers.find(professor => professor.id === id);
}