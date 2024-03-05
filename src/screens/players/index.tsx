import { Header } from "@components/header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Filter } from "@components/filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
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
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
