import React from "react";
import { CircleProgress } from ".";
import { renderWithTheme } from "@utils/jest-helper";

const makeSut = (progress?: number) => {
  const props = {
    size: 200,
    strokeWidth: 8,
    progress: progress || 0,
  };
  return renderWithTheme(<CircleProgress {...props} />);
};

describe("<CircleProgress />", () => {
  it("Should render correctly component", () => {
    const { getByTestId } = makeSut();
    const circle = getByTestId("wrapper-circle");
    expect(circle).toBeDefined();
  });

  it("Should render circle progress if progress > 0", () => {
    const { getByTestId } = makeSut(2);
    const progress = getByTestId("circle-progress");
    expect(progress).toBeDefined();
  });
});
