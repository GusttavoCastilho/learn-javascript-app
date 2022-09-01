import styled from "styled-components/native";

export const Wrapper = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 10px;
`;

export const StudentImage = styled.Image`
	width: 100%;
	height: 250px;
	margin: 30px 0px;
`;

export const Title = styled.Text`
	font-size: 26px;
	font-weight: bold;
	color: ${({ theme }) =>  theme.colors.dark['50']};
`;

export const TextTerms = styled.Text`
	font-size: 14px;
	line-height: 20px;
	font-weight: 500;
	padding: 20px 0px;
	color: ${({ theme }) => theme.colors.gray['0']};
`;

export const TextDarkTerms = styled.Text`
	font-size: 14px;
	line-height: 20px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.orange};
`;

export const ButtonContainer = styled.View`
	align-self: stretch;
`;

export const BoxSignin = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: auto;
`;

export const TextSignin = styled.Text`
	padding-bottom: 30px;
	color: ${({ theme }) => theme.colors.dark['50']};
`;

export const TextLogin = styled.Text`
	padding-bottom: 30px;
	color: ${({ theme }) => theme.colors.dark['50']};
	font-weight: 700;
`