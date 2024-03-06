import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Filter } from "@components/filter";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { PlayerCard } from "@components/playerCard";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { removeGroup } from "@storage/group/group.remove";
import { addPlayerByGroup } from "@storage/player/add.player.by.group";
import { playersGetByGroup } from "@storage/player/players.get.by.group";
import { AppError } from "@utils/app.error";
import { useCallback, useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerStorageDTO } from "@storage/player/player.storage.dto";
import { playersGetByTeam } from "@storage/player/get.player.by.team";
import { playerRemoveByGroup } from "@storage/player/remove.player";
import { Modal } from "@components/modal";
import { getFiltersByGroup } from "@storage/filter/get.filter.by.group";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("");
  const [allFiltersFromGroup, setFiltersFromGroup] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [playerName, setPlayerName] = useState("");
  const route = useRoute();
  const navigation = useNavigation();

  const { group } = route.params as RouteParams;

  async function deletePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(group, playerName);
      fetchPlayersByTeam();
    } catch {}
  }
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

  async function handleInsertPlayer() {
    try {
      if (playerName.trim().length == 0) {
        return Alert.alert("Erro", "O nome do participante não pode ser vazio");
      }
      const newPlayer = {
        name: playerName,
        team,
      };
      await addPlayerByGroup(newPlayer, group);
      setPlayerName("");
      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Erro", error.message);
      } else {
        Alert.alert(
          "Erro",
          "não foi possível realizar a inserção de um novo participante"
        );
      }
    }
  }

  async function handleCreateNewFilter() {
    try {
    } catch (error) {
      throw error;
    }
  }

  async function fetchAllTeamsFilter() {
    const allTeams = await getFiltersByGroup(group);
    setFiltersFromGroup(allTeams);
  }
  async function fetchPlayersByTeam() {
    const playersByTeam = await playersGetByTeam(group, team);
    setPlayers(playersByTeam);
  }

  function toggleModalVisibility() {
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    console.log("oi");
    fetchPlayersByTeam();
    fetchAllTeamsFilter();
  }, [team]);

  return (
    <Container>
      {modalVisible ? (
        <Modal
          onClose={() => {
            toggleModalVisibility();
          }}
        />
      ) : (
        <></>
      )}

      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe" />
      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={handleInsertPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleInsertPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={allFiltersFromGroup}
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
        <ButtonIcon icon="add" onPress={toggleModalVisibility} />
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => {
              deletePlayer(item.name);
            }}
          />
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
