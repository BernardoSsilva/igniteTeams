import { Header } from "@components/header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Filter } from "@components/filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/playerCard";
import { ListEmpty } from "@components/ListEmpty";


type Props = {
  groupName:string
}
export function Players({groupName = "Placeholder name"}:Props) {
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={groupName}
        subtitle="adicione a galera e separe os times"
      />
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
          players.length === 0 && {flex: 1}
        ]}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
