import React, { useState } from "react";

import {
  MaterialIcons,
  Feather,
  SimpleLineIcons,
  Octicons,
} from "@expo/vector-icons";

import { Button } from "@components/button";
import { TextInput } from "@components/text-input";

import {
  BoxSignin,
  ButtonContainer,
  StudentImage,
  TextDarkTerms,
  TextLogin,
  TextSignin,
  TextTerms,
  Title,
  Wrapper,
} from "./styles";

import StudentRegister from '../../assets/images/register.jpg'

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const isDisabledButton = !name || !email || !phone || !password;

  return (
    <Wrapper>
      <StudentImage source={StudentRegister} resizeMode="contain" />
      <Title>Sign up</Title>
      <TextInput
        placeholder="Full name"
        icon={<SimpleLineIcons name="user" size={20} color="#666" />}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        icon={<MaterialIcons name="alternate-email" size={20} color="#666" />}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Mobile"
        icon={<Feather name="phone" size={20} color="#666" />}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        icon={<Octicons name="lock" size={20} color="#666" />}
        value={password}
        onChangeText={setPassword}
      />

      <TextTerms>
        By signing up, you're agree to our{" "}
        <TextDarkTerms>Terms & Conditions{" "}</TextDarkTerms>
        and {" "}
        <TextDarkTerms>Privacy Policy {" "}</TextDarkTerms>
      </TextTerms>

      <ButtonContainer>
        <Button type="quartiary" disabled={isDisabledButton} onPress={() => {}}>
          Register
        </Button>
      </ButtonContainer>

      <BoxSignin>
        <TextSignin>Already an account ?</TextSignin>
        <TextLogin>Log in</TextLogin>
      </BoxSignin>
    </Wrapper>
  );
};
