import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  const navigation = useNavigation();

  function handleGoToGroupPage() {
    navigation.navigate("players", { group: title });
  }

  return (
    <Container onPress={handleGoToGroupPage}>
      <Icon></Icon>
      <Title>{title}</Title>
    </Container>
  );
}
