import React from "react";
import { ActivityIndicator, PressableProps } from "react-native";

import { Text, Wrapper } from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  type?: "primary" | "secondary" | "tertiary" | "quartiary";
} & PressableProps;

export const Button = ({
  children,
  isLoading = false,
  type = "primary",
  ...props
}: ButtonProps) => {
  return (
    <Wrapper testID="button" type={type} {...props}>
      {isLoading ? (
        <ActivityIndicator testID="spinner" />
      ) : (
        <Text>{children}</Text>
      )}
    </Wrapper>
  );
};
