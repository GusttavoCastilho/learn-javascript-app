import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { Wrapper, Input } from "./styles";

type InputProps = {
  icon?: React.ReactElement;
} & TextInputProps;

export const TextInput = ({ icon, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };
  return (
    <Wrapper testID="wrapper-input" isFocused={isFocused}>
      {icon && icon}
      <Input onFocus={handleOnFocus} onBlur={handleOnBlur} {...props} />
    </Wrapper>
  );
};
