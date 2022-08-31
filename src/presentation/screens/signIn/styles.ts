import styled from "styled-components/native";

export const Wrapper = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 10px;
`;

export const SudentImage = styled.Image`
	width: 100%;
	height: 250px;
	margin: 30px 0px;
`;

export const Title = styled.Text`
	font-size: 26px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.dark['50']};
`;

export const TextForgotPassword = styled.Text`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.orange};
	padding: 10px 0px;
	align-self: flex-end;
`;

export const ButtonContainer = styled.View`
	align-self: stretch;
`;

export const WrapperDiviser = styled.View`
	border-width: 1px;
	height: 1px;
	border-color: #E1E1E1;
	align-items: center;
	justify-content: center;
	margin: 20px 0px;
`;

export const Diviser = styled.View`
	width: 80px;
	height: 30px;
	background-color: ${({ theme }) => theme.colors.white};
	align-items: center;
	justify-content: center;
`;

export const TextDiviser = styled.Text``

export const ButtonGoogle = styled.Pressable`
	width: 100%;
	height: 50px;
	background-color: #F2F5F6;
	margin-top: 20px;
	align-items: center;
	flex-direction: row;
	border-radius: 12px;
`;

export const ImageGoogle = styled.View`
	margin-left: 20px;
`;

export const ButtonText = styled.View`
	flex: 1;
	margin-right: 20px;
`;

export const TextGoogle = styled.Text`
	font-size: 15px;
	align-self: center;
	text-align: center;
	color: ${({ theme }) => theme.colors.dark['50']};
`;

export const BoxSignup = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: auto;
`;

export const TextHaveAccount = styled.Text`
	padding-bottom: 15px;
	color: ${({ theme }) => theme.colors.dark['50']};
`;

export const TextSignup = styled.Text`
	padding-bottom: 15px;
	color: ${({ theme }) => theme.colors.dark['50']};
	font-weight: 700;
`;

export const ButtonSignup = styled.Pressable``