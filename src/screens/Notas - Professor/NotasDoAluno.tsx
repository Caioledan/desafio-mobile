import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Logo } from '../../components/Logo/Logo';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProfessorStackParamList } from '../../routes/professor.routes';
import { Disciplina } from '../../interfaces/escola.interface';
import { User } from '../../interfaces/auth.interface';
import { getDisciplinaById, getNotaByAlunoDisciplina, getUserById, salvarNota } from '../../database';
import { NotasCard } from '../../components/NotasCard/NotasCard';
import { DisciplinaInfoCard } from '../../components/DisciplinaInfoCard/DisciplinaInfoCard';

type NotasDoAlunoProps = RouteProp<ProfessorStackParamList, "NotasDoAluno">

export function NotasDoAluno() {
    const route = useRoute<NotasDoAlunoProps>();
    const {disciplinaId, alunoId} = route.params;
    const [disciplina, setDisciplina] = useState<Disciplina>();
    const [aluno, setAluno] = useState<User>();
    const [isEditing, setIsEditing] = useState(false);
    const [parcial, setParcial] = useState("");
    const [bimestral, setBimestral] = useState('');

    useEffect(() => {
        const dadosDisciplina = getDisciplinaById(disciplinaId);
        const dadosAluno = getUserById(alunoId);
        const nota = getNotaByAlunoDisciplina(alunoId, disciplinaId)
        
        setDisciplina(dadosDisciplina);
        setAluno(dadosAluno);

        if(nota){
          setParcial(nota.parcial?.toString() ?? "");
          setBimestral(nota.bimestral?.toString() ?? "");
        }
        else {
          setParcial("");
          setBimestral("");
        }
    }, [disciplinaId, alunoId])

    const handleSalvarNotas = () => {
      const notaParcial = parseFloat(parcial) || 0;
      const notaBimestral = parseFloat(bimestral) || 0;

      salvarNota(alunoId, disciplinaId, notaParcial, notaBimestral);

      Alert.alert("Sucesso", "Notas salvas!");
      setIsEditing(false);
    }

  return (
    <View style={styles.container}>
      <Logo height={105} width={93} fontSize={20} />
      <DisciplinaInfoCard disciplina={disciplina?.nome || ""} aluno={aluno?.nome || ""}/>
      {aluno && (
        <NotasCard 
          matricula={aluno.matricula}
          parcial={parcial}
          bimestral={bimestral}
          isEditing={isEditing}
          onParcialChange={setParcial}
          onBimestralChange={setBimestral}
        />
      )}

      {isEditing ? (
        <TouchableOpacity onPress={handleSalvarNotas} style={styles.button}>
          <Text style={styles.text}>Salvar Alterações</Text>
        </TouchableOpacity>

      ) : (
        <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.button}>
          <Text style={styles.text}>Modificar Notas</Text>
        </TouchableOpacity>

      )}
    </View>
  );
}