import React from "react";
import { TopicNodeRow } from ".";
import { renderWithTheme } from "@utils/jest-helper";

const makeSut = (children: React.ReactNode) => {
  return renderWithTheme(<TopicNodeRow>{children}</TopicNodeRow>);
};

describe("<TopicNodeRow />", () => {
  it("Should render correctly component", () => {
    const { getByTestId } = makeSut("my children");
    const element = getByTestId("topic-node");
    expect(element.children[0]).toEqual("my children");
  });
});
