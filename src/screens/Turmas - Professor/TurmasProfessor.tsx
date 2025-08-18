import React from "react";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { useAuth } from "../../hooks/useAuth";
import { TurmasDoProfessor } from "../../components/Professor/TurmasDoProfessor/TurmasDoProfessor";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonLogout } from "../../components/ButtonLogout/ButtonLogout";

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
      <UserInfo />
      <TurmasDoProfessor />
      <ButtonLogout />
    </ScrollView>
  );
}
