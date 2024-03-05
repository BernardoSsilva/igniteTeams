import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Container, Icon } from "./styles";
import { Button } from "@components/button";
import { UsersThree } from "phosphor-react-native";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState("");

  function handleNewGroup() {
    navigation.navigate("players", { group: groupName });
  }
  return (
    <Container>
      <Header showBackButton={true} />

      <Icon />
      <Highlight
        title={"Nova Turma"}
        subtitle="Crie uma turma para adicionar pessoas"
      />
      <Input placeholder="Nome da turma" onChangeText={setGroupName} />
      <Button title="Criar" onPress={handleNewGroup} />
    </Container>
  );
}
