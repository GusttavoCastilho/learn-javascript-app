import React from "react";
import { MultipleChoiceAnswer } from ".";
import { renderWithTheme } from "@utils/jest-helper";

const makeSut = (isSelected?: boolean) => {
  return renderWithTheme(
    <MultipleChoiceAnswer
      choice="Good"
      onPress={jest.fn()}
      isSelected={isSelected}
    />
  );
};

describe("<MultipleChoiceAnswer />", () => {
  it("Should render correctly component", () => {
    const { getByTestId } = makeSut();
    const element = getByTestId("button-choice");
    expect(element).toBeDefined();
  });

  it("Should render styles if property isSelect passed", () => {
    const { getByTestId, getByText } = makeSut(true);
    const button = getByTestId("button-choice");
    expect(button.props.style[0].borderColor).toEqual("#40F99B");

    const text = getByText("Good");
    expect(text.props.style[0].color).toEqual("#40F99B");
  });
});
