import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Module as ModuleScreen } from "@screens/module";
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Module"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.navigation.tint,
      }}
    >
      <BottomTab.Screen
        name="Module"
        component={ModuleScreen}
        options={{
          title: "JS 101",
          tabBarIcon: ({ color }) => (
            <Feather name="book" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ModuleScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
