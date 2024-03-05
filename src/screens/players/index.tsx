import { Header } from "@components/header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Filter } from "@components/filter";
import { Alert, FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/playerCard";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/app.error";
import { removeGroup } from "@storage/group/group.remove";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState<string[]>([]);
  const route = useRoute();
  const navigation = useNavigation();

  const { group } = route.params as RouteParams;

  async function handleDeleteGroup() {
    try {
      await removeGroup(group);
      Alert.alert("Grupo excluído com sucesso");
      navigation.navigate("groups");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Erro", error.message);
      } else {
        Alert.alert("Erro", "não foi possível realizar a exclusão");
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe" />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["time a", "time b"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas neste time" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button
        title="Remover grupo"
        type="SECONDARY"
        onPress={handleDeleteGroup}
      />
    </Container>
  );
}
