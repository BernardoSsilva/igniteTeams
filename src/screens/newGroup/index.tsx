import { Header } from "@components/headder";
import { Highlight } from "@components/highlight";
import { Container, Icon } from "./styles";
import { Button } from "@components/button";
import { UsersThree } from "phosphor-react-native";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton={true} />

      <Icon />
      <Highlight
        title="Nova Turma"
        subtitle="Crie uma turma para adicionar pessoas"
      />
      <Button title="Criar" />
    </Container>
  );
}
