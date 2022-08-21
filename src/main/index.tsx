import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@styles/theme";
import { Button } from "@components/button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Oi</Button>
      <View>
        <Text>Hello World</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
