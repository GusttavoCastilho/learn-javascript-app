import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeProvider } from "styled-components/native";
import { theme } from "@styles/theme";
import { Navigation } from "./navigation";
import { AuthProvider } from "../presentation/context/auth/auth-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
