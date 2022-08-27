import React from "react";
import { TopicNode } from ".";
import { renderWithTheme } from "@utils/jest-helper";

const mockedTopic = {
  id: "1",
  title: "Variable",
  icon: "https://b.kisscc0.com/20180817/pye/kisscc0-mathematics-variable-mathematical-notation-functio-ftparen-5b7757b87b3934.2015057515345478965047.png",
  level: 1,
  progress: 1,
  description: "This is some description",
  context: "This is some context",
  resources: [
    {
      id: "1",
      title: "JavaScript Variables",
      url: "https://www.w3schools.com/js/js_variables.asp",
      completed: true,
    },
  ],
  exercises: [
    {
      id: "1",
      title: "JavaScript Variables",
      url: "https://www.w3schools.com/js/js_variables.asp",
      completed: true,
    },
  ],
};

const makeSut = (isDisabled = true) => {
  return renderWithTheme(
    <TopicNode topic={mockedTopic} isDisabled={isDisabled} />
  );
};

describe("<TopicNode />", () => {
  it("Should render correctly component", () => {
    const { getByTestId, getByText } = makeSut();

    const button = getByTestId("wrapper-topic");
    const text = getByText("Variable");

    expect(button).toBeDefined();
    expect(button.props.accessibilityState.disabled).toEqual(true);
    expect(text).toBeTruthy();
  });

  it("Should render background-color if isDisabled is modify", () => {
    const { getByTestId } = makeSut(false);

    const circle = getByTestId("circle");
    expect(circle.props.style[0].backgroundColor).toEqual("#40F99B");
  });
});
