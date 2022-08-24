import styled, { css } from "styled-components/native";

type Props = {
	completed: boolean;
}

export const Wrapper = styled.Pressable`
	flex-direction: row;
	margin-bottom: 20px;
	align-items: center;
`

export const ContainerCompleted = styled.View<Props>`
	width: 30px;
	aspect-ratio: 1;
	border-width: 2px;
	border-color: ${({ theme }) => theme.colors.dark['150']};
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	margin-right: 5px;

	${({ completed, theme }) => completed && css`
		background-color: ${theme.colors.primary};
		border-color: ${theme.colors.primary};
	`}
`

export const Icon = styled.View``

export const TextCompleted = styled.Text``

export const Title = styled.Text``

export const LineIndicator = styled.View<Props>`
	position: absolute;
	width: 2px;
	height: 20px;
	left: 15px;
	top: 30px;

	background-color: ${({ completed, theme }) => completed ? theme.colors.primary : theme.colors.dark['150']};
`