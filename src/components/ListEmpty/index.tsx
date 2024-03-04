import { Container, NotFoundText } from "./styles";


type Props = {
    message:string
}
export function ListEmpty({message}:Props) {
  return (
    <Container>
      <NotFoundText>{message}</NotFoundText>
    </Container>
  );
}
