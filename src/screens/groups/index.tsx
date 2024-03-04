import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/headder";
import { Highlight } from "@components/highlight";
import * as S from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

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
        <ListEmpty />
      )}
    </S.Container>
  );
}
