import { User } from "../interfaces/auth.interface";

export const mockUsers: User[] = [
  {
    id: 1,
    nome: "Caio",
    matricula: "12345",
    senha: "12345",
    funcionalidade: "Diretor",
  },
  {
    id: 2,
    nome: "Júlia",
    matricula: "1234",
    senha: "1234",
    funcionalidade: "Professor",
  },
  {
    id: 3,
    nome: "Mari",
    matricula: "123",
    senha: "123",
    funcionalidade: "Aluno",
    turmaId: 1,
  },
  {
    id: 4,
    nome: "Lucas Martins",
    matricula: "20101",
    senha: "123",
    funcionalidade: "Aluno",
    turmaId: 1,
  },
  {
    id: 5,
    nome: "Beatriz Almeida",
    matricula: "20102",
    senha: "123",
    funcionalidade: "Aluno",
    turmaId: 1,
  },
  {
    id: 6,
    nome: "Gabriel Pereira",
    matricula: "20103",
    senha: "123",
    funcionalidade: "Aluno",
    turmaId: 1,
  },
  {
    id: 7,
    nome: "Sofia Ribeiro",
    matricula: "20104",
    senha: "123",
    funcionalidade: "Aluno",
    turmaId: 2,
  },
  {
    id: 8,
    nome: "Mateus Ferreira",
    matricula: "20105",
    senha: "123",
    funcionalidade: "Aluno",
    turmaId: 2,
  },
  {
    id: 9,
    nome: "Luís Sierra",
    matricula: "20001",
    senha: "123",
    funcionalidade: "Professor",
  }
];
