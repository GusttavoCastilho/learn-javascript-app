import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const width = Dimensions.get('window').width;
const itemWidth = width / 3 - 30;

type CircleProps = {
	isDisabled: boolean;
}

export const Wrapper = styled.Pressable`
  max-width: 150px;
  width: ${itemWidth}px;
  margin: 10px;
  align-items: center;
`;

export const Progress = styled.View`
  width: 100%;
  aspect-ratio: 1;
  justify-content: center;
`;

export const Circle = styled.View<CircleProps>`
	width: ${itemWidth - 20}px;
	align-items: center;
	justify-content: center;
	align-self: center;
	aspect-ratio: 1;
	border-radius: ${itemWidth - 20 / 2}px;

	${({ theme, isDisabled }) => css`
		background-color: ${isDisabled ? theme.colors.dark['150'] : theme.colors.primary};
	`}
`

export const Image = styled.Image`
	width: 50%;
	aspect-ratio: 1;
`

export const Title = styled.Text`
	font-size: 16px;
	margin-vertical: 5px;
	font-weight: 500;
	text-align: center;
`;
