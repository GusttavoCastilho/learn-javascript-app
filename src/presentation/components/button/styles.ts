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
    border-radius: 5;
    margin-bottom: 20;
    margin-vertical: 5;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 16;
    font-weight: 500;
  `}
`;
