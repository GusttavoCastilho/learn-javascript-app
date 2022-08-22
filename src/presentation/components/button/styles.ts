import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonProps } from ".";

type WrapperProps = Pick<ButtonProps, "type">;

const WrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
  `,
  tertiary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.tertiary};
  `,
};

export const Wrapper = styled.Pressable<WrapperProps>`
  ${({ type, theme }) => css`
    ${!!type && WrapperModifiers[type](theme)};
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-vertical: 5px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 16px;
    font-weight: 500;
  `}
`;
