import { Text, View } from 'react-native';
import { styles } from './styles';


interface DisciplinaInfoProps {
  disciplina: string;
  professor: string;
  aluno: string;
}


export function DisciplinaInfoAluno({ disciplina, professor, aluno }: DisciplinaInfoProps ) {
  return (
    <View style={styles.container}>
        <View style={styles.info}>
            <Text style={styles.title}>Disciplina:</Text>
            <Text style={styles.text}>{disciplina}</Text>
        </View>
        <View style={styles.info}>
            <Text style={styles.title}>Professor:</Text>
            <Text style={styles.text}>{professor}</Text>
        </View>
        <View style={styles.info}>
            <Text style={styles.title}>Aluno:</Text>
            <Text style={styles.text}>{aluno}</Text>
        </View>
    </View>
  );
}