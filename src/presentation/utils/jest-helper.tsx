import React from "react";
import { ThemeProvider } from "styled-components/native";
import { render, RenderResult } from "@testing-library/react-native";

import { theme } from "@styles/theme";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
