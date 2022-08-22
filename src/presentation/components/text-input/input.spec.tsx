import React from "react";
import { TextInput } from ".";
import { renderWithTheme } from "@utils/jest-helper";
import { MaterialIcons } from "@expo/vector-icons";

const makeSut = (icon?: React.ReactElement) => {
  return renderWithTheme(
    <TextInput placeholder="any_placeholder" icon={icon} />
  );
};

describe("<TextInput />", () => {
  it("Should render correctly component", () => {
    const { getByPlaceholderText } = makeSut();
    const input = getByPlaceholderText("any_placeholder");
    expect(input).toBeDefined();
  });

  it("Should render icon if passed", () => {
    const { getByTestId } = makeSut(<MaterialIcons name="lock" />);
    const icon = getByTestId("wrapper-input");
    expect(icon).toBeTruthy();
  });
});
