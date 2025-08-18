import React from "react";
import { styles } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { ScrollView } from "react-native-gesture-handler";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { TurmasDoDiretor } from "../../components/Diretor/TurmasDoDiretor/TurmasDoDiretor";
import { ProfessoresGrid } from "../../components/Diretor/ProfessoresGrid/ProfessoresGrid";
import { ButtonLogout } from "../../components/ButtonLogout/ButtonLogout";

export function HomeDiretor() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Logo height={105} width={93} fontSize={20} />
      <UserInfo />
      <TurmasDoDiretor />
      <ProfessoresGrid />
      <ButtonLogout />
    </ScrollView>
  );
}
