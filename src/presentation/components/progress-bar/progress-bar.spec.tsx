import React from "react";
import { ProgressBar } from ".";
import { renderWithTheme } from "@utils/jest-helper";

const makeSut = (progress: number) => {
  return renderWithTheme(<ProgressBar progress={progress} />);
};

describe("<ProgressBar />", () => {
  it("Should render width percentage correctly", () => {
    const { getByTestId } = makeSut(50);
    const progress = getByTestId("progress");
    expect(progress.props.style[0].width).toEqual("5000%");
  });
});
