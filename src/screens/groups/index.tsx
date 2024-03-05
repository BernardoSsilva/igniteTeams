import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import * as S from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/button";

import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();
  function handleNewGroup() {
    navigation.navigate("newGroup");
  }

  return (
    <S.Container>
      <Header></Header>
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {groups.length > 0 ? (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <GroupCard title={item} />}
        />
      ) : (
        <ListEmpty message="nenhum registro encontrado!!" />
      )}
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
