import React from "react";
import { Button } from "react-native";

import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { UserInfoProfessor } from "../../components/Professor/UserInfoProfessor/UserInfoProfessor";
import { useAuth } from "../../hooks/useAuth";
import { TurmasDoProfessor } from "../../components/Professor/TurmasDoProfessor/TurmasDoProfessor";
import { ScrollView } from "react-native-gesture-handler";

export function TurmasProfessor() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Logo height={105} width={93} fontSize={20} />
      <UserInfoProfessor />
      <TurmasDoProfessor />
      <Button title="LOGOUT" onPress={handleLogout} />
    </ScrollView>
  );
}
