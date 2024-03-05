import { Header } from "@components/header";
import { Container } from "./styles";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { Button } from "@components/button";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Input placeholder="Nome do participante" />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
