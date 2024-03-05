import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groups.getall";

export function Groups() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState<string[]>([]);

  async function fetchGroups() {
    try {
      const allGroups = await groupsGetAll();
      setGroups(allGroups);
    } catch (error) {
      throw error;
    }
  }

  function handleNewGroup() {
    navigation.navigate("newGroup");
  }

  useFocusEffect(useCallback(() => {

    fetchGroups();
    
  },[]));

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
      <Button title="Criar novo grupo" onPress={handleNewGroup} />
    </S.Container>
  );
}
