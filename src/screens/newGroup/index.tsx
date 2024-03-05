import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Container, Icon } from "./styles";
import { Button } from "@components/button";
import { UsersThree } from "phosphor-react-native";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("players", {group:"testGroup"});
  }
  return (
    <Container>
      <Header showBackButton={true} />

      <Icon />
      <Highlight
        title={"Nova Turma"}
        subtitle="Crie uma turma para adicionar pessoas"
      />
      <Input placeholder="Nome da turma" />
      <Button title="Criar" onPress={handleNewGroup} />
    </Container>
  );
}
