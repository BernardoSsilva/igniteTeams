import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 50%;
  width: 120%;
  height: 300px;

  z-index: 999;
  position: absolute;
`;

export const Form = styled.View`
  ${({ theme }) => css`
    border-radius: 6px;
    background-color: ${theme.COLORS.GRAY_500};
    padding-bottom: 30px;
    justify-content: center;
    text-align: center;
    z-index: 1;
    padding: 24px;
    width: 100%;
    flex: 1;
    height: 50%;
  `}
`;
