import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 90,
  color: theme.COLORS.GREEN_700,
}))`
  margin-top: 100px;
  align-self: center;
`;
