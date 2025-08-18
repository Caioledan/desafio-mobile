import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Disciplina } from "../interfaces/escola.interface";
import { User } from "../interfaces/auth.interface";
import {
  getDisciplinaById,
  getNotaByAlunoDisciplina,
  getUserById,
  salvarNota,
} from "../database";

export function useGerenciadorDeNotas(alunoId: number, disciplinaId: number) {
  const [disciplina, setDisciplina] = useState<Disciplina>();
  const [aluno, setAluno] = useState<User>();
  const [isEditing, setIsEditing] = useState(false);
  const [parcial, setParcial] = useState("");
  const [bimestral, setBimestral] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dadosDisciplina = getDisciplinaById(disciplinaId);
    const dadosAluno = getUserById(alunoId);
    const nota = getNotaByAlunoDisciplina(alunoId, disciplinaId);

    setDisciplina(dadosDisciplina);
    setAluno(dadosAluno);
    setParcial(nota?.parcial?.toString() ?? "");
    setBimestral(nota?.bimestral?.toString() ?? "");
  }, [disciplinaId, alunoId]);

  const handleSalvarNotas = () => {
    if (!aluno) return;

    const notaParcial = parseFloat(parcial) || 0;
    const notaBimestral = parseFloat(bimestral) || 0;

    salvarNota(alunoId, disciplinaId, notaParcial, notaBimestral);

    Alert.alert("Sucesso", "Notas salvas!");
    setIsEditing(false);
  };

  const handleModificarNotas = () => {
    setIsEditing(true);
  };

  return {
    aluno,
    disciplina,
    parcial,
    setParcial,
    bimestral,
    setBimestral,
    isEditing,
    handleSalvarNotas,
    handleModificarNotas,
  };
}
