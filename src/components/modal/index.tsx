import { Highlight } from "@components/highlight";
import { Container, Form } from "./style";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Title } from "@components/GroupCard/styles";
import { useEffect, useState } from "react";
import { addFilterByGroup } from "@storage/filter/add.filter.by.group";
import { AppError } from "@utils/app.error";
import { Alert } from "react-native";

type Props = {
  onClose: () => void;
  group: string;
};
export function Modal({ onClose, group }: Props) {
  const [newFilterTitle, setNewFilterTitle] = useState("");

  async function handleSaveNewFilter() {
    try {
      await addFilterByGroup(group, newFilterTitle);
      setNewFilterTitle("");
      alert("Criado com sucesso")
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Erro na criação", error.message);
      } else {
        Alert.alert("Erro na criação", "Algum erro inesperado ocorreu, tente novamente")
      }
    }
  }
  useEffect(() => {
    console.log(newFilterTitle);
  }, [newFilterTitle]);
  return (
    <Container>
      <Form>
        <Title style={{marginTop: -5}}>
          <ButtonIcon icon="close" type="SECONDARY" onPress={onClose} />
          <Highlight
            title="novo filtro"
            subtitle="informe abaixo o nome do seu novo filtro"
          ></Highlight>
        </Title>

        <Input
          value={newFilterTitle}
          onChangeText={setNewFilterTitle}
          style={{ marginTop: 20, width: "full" }}
          placeholder="novo filtro"
          keyboardAppearance="dark"
        />
        <Button
          onPress={handleSaveNewFilter}
          style={{ width: "full" }}
          title="Criar novo filtro"
        />
      </Form>
    </Container>
  );
}
