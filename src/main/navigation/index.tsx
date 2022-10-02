import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { FontAwesome, Feather } from "@expo/vector-icons";

import { useTheme } from "styled-components/native";
import { useAuth } from "../../presentation/context/auth/auth-context";

import { Module as ModuleScreen } from "@screens/module";
import { SignUp as SignUpScreen } from '@screens/signUp'
import { SignIn as SignInScreen } from '@screens/signIn'

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export const Navigation = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user.email ? AuthRoutes() : AppRoutes()}
    </NavigationContainer>
  );
};

const AuthRoutes = () => {
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

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Module"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.navigation.tint,
        headerShown: false
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
