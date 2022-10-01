import React, { useState, useMemo } from "react";

import { MaterialIcons, Octicons } from "@expo/vector-icons";

import { TextInput } from "@components/text-input";
import { Button } from "@components/button";

import { useAuth } from "../../context/auth/auth-context";

import {
  BoxSignup,
  ButtonContainer,
  ButtonGoogle,
  ButtonText,
  ButtonSignup,
  Diviser,
  ImageGoogle,
  SudentImage,
  TextDiviser,
  TextForgotPassword,
  TextGoogle,
  TextHaveAccount,
  TextSignup,
  Title,
  Wrapper,
  WrapperDiviser,
} from "./styles";

import GoogleSvg from "../../assets/icons/google.svg";
import StudentImg from "../../assets/images/student.jpg";
import { Alert } from "react-native";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading } = useAuth();

  const isDisabledButton = useMemo(() => {
    return !email || !password;
  }, [email, password]);

  const handleSignInUser = () => {
    try {
      signIn(email, password);
    } catch (error) {
      Alert.alert("SignIn", "Invalid Credentials");
    }
  };

  return (
    <Wrapper>
      <SudentImage source={StudentImg} resizeMode="contain" />

      <Title>Login</Title>
      <TextInput
        placeholder="Email"
        icon={<MaterialIcons name="alternate-email" size={20} color="#666" />}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        icon={<Octicons name="lock" size={20} color="#666" />}
        value={password}
        onChangeText={setPassword}
      />

      <TextForgotPassword>Forgot Password?</TextForgotPassword>

      <ButtonContainer>
        <Button
          type="quartiary"
          disabled={isDisabledButton}
          isLoading={loading}
          onPress={handleSignInUser}
        >
          Login
        </Button>
      </ButtonContainer>

      <WrapperDiviser>
        <Diviser>
          <TextDiviser>OR</TextDiviser>
        </Diviser>
      </WrapperDiviser>

      <ButtonGoogle>
        <ImageGoogle>
          <GoogleSvg />
        </ImageGoogle>
        <ButtonText>
          <TextGoogle>Login with Google</TextGoogle>
        </ButtonText>
      </ButtonGoogle>

      <BoxSignup>
        <TextHaveAccount>Don't have an account ?</TextHaveAccount>
        <ButtonSignup>
          <TextSignup>Sign-up</TextSignup>
        </ButtonSignup>
      </BoxSignup>
    </Wrapper>
  );
};
