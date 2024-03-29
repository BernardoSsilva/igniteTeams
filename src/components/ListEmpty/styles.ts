
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;

  align-items: center;
`;

export const NotFoundText = styled.Text`
${({ theme }) => css`
font-size: 30px;
  margin-top: 20px;
  color: ${theme.COLORS.RED};
  text-align: center;
  font-family: ${theme.FONT_FAMILY.BOLD};
`} `;
