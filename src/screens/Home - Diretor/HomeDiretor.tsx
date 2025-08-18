import React from 'react';
import { Button, View } from 'react-native';
import { styles } from './styles';
import { Logo } from '../../components/Logo/Logo';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/useAuth';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { TurmasDoDiretor } from '../../components/Diretor/TurmasDoDiretor/TurmasDoDiretor';
import { ProfessoresGrid } from '../../components/Diretor/ProfessoresGrid/ProfessoresGrid';

export function HomeDiretor() {
      const { logout } = useAuth();
    
      const handleLogout = async () => {
        await logout();
      };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Logo height={105} width={93} fontSize={20} />
        <UserInfo />
        <TurmasDoDiretor />
        <ProfessoresGrid />
        <Button title="LOGOUT" onPress={handleLogout} />
    </ScrollView>
  );
}