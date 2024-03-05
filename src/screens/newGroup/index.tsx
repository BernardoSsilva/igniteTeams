import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, Icon } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState("");

  function handleNewGroup() {
    if (groupName === "") {
      Alert.alert("Erro", "O nome de grupo deve possuir algum conteúdo");
    } else {
      navigation.navigate("players", { group: groupName });
    }
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
