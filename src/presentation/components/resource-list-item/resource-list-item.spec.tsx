import React from "react";
import { fireEvent } from "@testing-library/react-native";
import * as WebBrowser from "expo-web-browser";

import { renderWithTheme } from "@utils/jest-helper";
import { ResourceListItem, ResourceListItemProps } from ".";

const mockedResource = {
  resource: {
    id: "1",
    title: "any resource",
    url: "any url",
    completed: false,
  },
  index: 1,
  isLast: false,
};

jest.mock("expo", () => ({
  WebBrowser: {
    openBrowserAsync: jest.fn(),
  },
}));

const makeSut = (props?: ResourceListItemProps) => {
  console.log(props);
  return renderWithTheme(<ResourceListItem {...mockedResource} {...props} />);
};

describe("<ResourceListItem />", () => {
  it("Should render correctly component", () => {
    const { getByTestId, getByText } = makeSut();
    const element = getByTestId("resource");
    expect(element).toBeDefined();

    const textCompleted = getByText("2");
    expect(textCompleted).toBeTruthy();

    const title = getByText("any resource");
    expect(title).toBeDefined();
  });

  it("Should click on button navigate to url", () => {
    const mock = jest.spyOn(WebBrowser, "openBrowserAsync");
    mock.mockImplementation((): any => Promise.resolve());

    const { getByTestId } = makeSut();
    const element = getByTestId("resource");
    fireEvent.press(element);

    expect(mock).toHaveBeenCalledWith("any url");
  });

  it("Should render icon if property resource is completed", () => {
    const { getByTestId } = makeSut({
      resource: { completed: true },
    });

    const icon = getByTestId("completed-icon");
    expect(icon).toBeTruthy();
  });

  it("Should render line indicator if not last item", () => {
    const { getByTestId, debug } = makeSut({ isLast: true });
    debug();
    const lineIndicator = getByTestId("line-indicator");
    expect(lineIndicator).toBeDefined();
  });
});
