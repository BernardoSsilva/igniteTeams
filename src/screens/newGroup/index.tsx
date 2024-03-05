import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, Icon } from "./styles";
import { groupCreate } from "@storage/group/group.create";
import { AppError } from "@utils/app.error";
import { groupsGetAll } from "@storage/group/groups.getall";

export function NewGroup() {
  const navigation = useNavigation();

  const [groupName, setGroupName] = useState("");

  async function handleNewGroup() {
    try {
      await groupCreate(groupName);
      navigation.navigate("players", { group: groupName });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "não foi possível criar um novo grupo");
      }
    }
  }

  return (
    <Container>
      <Header showBackButton={true} />

      <Icon />
      <Highlight
        title={"Novo grupo"}
        subtitle="Crie um grupo para adicionar pessoas"
      />
      <Input placeholder="Nome do grupo" onChangeText={setGroupName} />
      <Button title="Criar" onPress={handleNewGroup} />
    </Container>
  );
}
