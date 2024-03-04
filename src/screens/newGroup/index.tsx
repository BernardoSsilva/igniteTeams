import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Container, Icon } from "./styles";
import { Button } from "@components/button";
import { UsersThree } from "phosphor-react-native";
import { Input } from "@components/input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton={true} />

      <Icon />
      <Highlight
        title="Nova Turma"
        subtitle="Crie uma turma para adicionar pessoas"
      />
      <Input placeholder="Nome da turma"/>
      <Button title="Criar" />
    </Container>
  );
}
