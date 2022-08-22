import styled, { css } from "styled-components/native";

type ProgressProps = {
	progress: number;
}

export const Wrapper = styled.View`
	background-color: ${({ theme }) => theme.colors.white};
	height: 7px;
`

export const Progress = styled.View<ProgressProps>`
	${({ progress, theme }) => css`
		width: ${Math.max(5, progress * 100)}%;
		background-color: ${theme.colors.primary};
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	`}
`