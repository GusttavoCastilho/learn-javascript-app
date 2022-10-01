import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@styles/theme";
import { Navigation } from "./navigation";
import { AuthProvider } from '../presentation/context/auth/auth-context'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
