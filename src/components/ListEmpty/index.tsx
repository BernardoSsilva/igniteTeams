import { Container, NotFoundText } from "./styles";

export function ListEmpty() {
  return (
    <Container>
      <NotFoundText>Nenhuma Turma encontrada!</NotFoundText>
    </Container>
  );
}
