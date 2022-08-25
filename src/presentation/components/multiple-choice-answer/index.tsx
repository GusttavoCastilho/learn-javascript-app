import React from "react";
import { TextChoice, Wrapper } from "./styles";

type MultipleChoiceAnswerProps = {
  choice: string;
  isSelected?: boolean;
  onPress: (choice: string) => void;
};

export const MultipleChoiceAnswer = ({
  choice,
  onPress,
  isSelected = false,
  ...props
}: MultipleChoiceAnswerProps) => {
  return (
    <Wrapper
      onPress={() => onPress(choice)}
      testID="button-choice"
      isSelected={isSelected}
      {...props}
    >
      <TextChoice isSelected={isSelected}>{choice}</TextChoice>
    </Wrapper>
  );
};
