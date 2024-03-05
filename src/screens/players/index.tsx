import { Header } from "@components/header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";

export function Players() {
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
      <Button  title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
