import { View, StatusBar, Text } from "react-native";
import * as S from "./styles";
import { Header } from "@components/headder";
import { Highlight } from "@components/highlight";

export function Groups() {
  return (
    <S.Container>
      <Header></Header>
      <Highlight title="Turmas" subtitle="jogue com a sua turma"/>
    </S.Container>
  );
}
