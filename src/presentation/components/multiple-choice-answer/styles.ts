import styled, { css } from "styled-components/native";

type Props = {
	isSelected?: boolean;
}

export const Wrapper = styled.Pressable<Props>`
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.default};
	padding: 10px;
	margin-vertical: 5px;
	border-radius: 5px;

	${({ theme, isSelected }) => isSelected && css`
		border-color: ${theme.colors.primary};
	`}
`

export const TextChoice = styled.Text<Props>`
	color: ${({ theme }) => theme.colors.dark['0']};

	${({ theme, isSelected }) => isSelected && css`
		color: ${theme.colors.primary};
		font-weight: bold;
	`}
`