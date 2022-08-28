import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@styles/theme";
import { Navigation } from "./navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
