
export type funcionalidade = 'Aluno' | 'Professor' | 'Diretor';

export interface AuthContextData {
  user: User | null;
  login: (matricula: string, senha: string) => boolean;
  loading: boolean;
}

export interface User {
  id: number;
  nome: string;
  matricula: string;
  senha: string;
  funcionalidade: funcionalidade;
}
