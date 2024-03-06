import { Highlight } from "@components/highlight";
import { Container, Form } from "./style";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Title } from "@components/GroupCard/styles";

type Props = {
  onClose: () => void;
};
export function Modal({ onClose }: Props) {
  return (
    <Container>
      <Form>
        <Title>
          <ButtonIcon icon="close" type="SECONDARY" onPress={onClose} />
          <Highlight
            title="novo filtro"
            subtitle="informe abaixo o nome do seu novo filtro"
          ></Highlight>
        </Title>

        <Input
          style={{ marginTop: 20, width: 370 }}
          placeholder="novo filtro"
          keyboardAppearance="dark"
        />
        <Button style={{ width: 370 }} title="Criar novo filtro" />
      </Form>
    </Container>
  );
}
