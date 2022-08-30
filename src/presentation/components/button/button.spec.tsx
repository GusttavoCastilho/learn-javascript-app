import React from "react";
import { Button } from ".";
import { renderWithTheme } from "@utils/jest-helper";

type MakeSutProps = {
  isLoading?: boolean;
  type?: "primary" | "secondary" | "tertiary" | 'quartiary';
};

const makeSut = (props?: MakeSutProps) => {
  return renderWithTheme(
    <Button isLoading={props?.isLoading} type={props?.type}>
      My Children
    </Button>
  );
};

describe("<Button />", () => {
  it("Should render correctly if passed property children", () => {
    const { getByText } = makeSut();
    const text = "My Children";
    const element = getByText(text);
    expect(element.props.children).toEqual(text);
  });

  it("Should show Spinner if isLoading passed and not show children", () => {
    const { getByTestId, queryByText } = makeSut({ isLoading: true });
    const text = "My Children";
    const children = queryByText(text);
    expect(children).toBeNull;
    const spinner = getByTestId("spinner");
    expect(spinner).toBeTruthy();
  });

  it("Should render default type primary if not passed", () => {
    const { getByTestId } = makeSut();
    const button = getByTestId("button");
    expect(button.props.style[0].backgroundColor).toBe("#40F99B");
  });

  it("Should render type secondary if passed", () => {
    const { getByTestId } = makeSut({ type: "secondary" });
    const button = getByTestId("button");
    expect(button.props.style[0].backgroundColor).toBe("#E85D75");
  });

  it("Should render type tertiary if passed", () => {
    const { getByTestId } = makeSut({ type: "tertiary" });
    const button = getByTestId("button");
    expect(button.props.style[0].backgroundColor).toBe("#9D69A3");
  });

  it("Should render type quartiary if passed", () => {
    const { getByTestId } = makeSut({ type: "quartiary" });
    const button = getByTestId("button");
    expect(button.props.style[0].backgroundColor).toBe("#FF735C");
  });
});
