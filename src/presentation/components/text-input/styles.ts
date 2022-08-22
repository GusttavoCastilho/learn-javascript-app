import styled, { css } from "styled-components/native";

type WrapperProps = {
	isFocused: boolean
}

export const Wrapper = styled.View<WrapperProps>`
	${({ theme, isFocused }) => css`
		width: 100%;
		flex-direction: row;
		padding: 10px;
		margin-vertical: 10px;
		background-color: ${theme.colors.bg};
		border-radius: 8px;
		height: 50px;
		align-items: center;

		${isFocused && css`
			border-width: 1px;
			border-color: ${theme.colors.red};
		`}
	`}
`;

export const Input = styled.TextInput`
	${({ theme }) => css`
		width: 100%;
		color: ${theme.colors.dark[100]};
		padding-left: 10px;
	`}
`