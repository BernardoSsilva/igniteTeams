import { View, StatusBar, Text } from "react-native";
import * as S from "./styles";
import { Header } from "@components/headder";
import { Highlight } from "@components/highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <S.Container>
      <Header></Header>
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Test"></GroupCard>
    </S.Container>
  );
}
