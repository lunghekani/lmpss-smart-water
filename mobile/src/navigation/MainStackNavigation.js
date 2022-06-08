import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupScreen, LoginScreen, Login } from "../screens";
import { Tabs } from "./TabsNavigator";

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="LoginScreen"
      options={{ headerShown: false }}
      component={LoginScreen}
    />
    <Stack.Screen
      name="Login"
      options={{ headerShown: false }}
      component={Login}
    />
    <Stack.Screen
      name="Signup"
      options={{ headerShown: false }}
      component={SignupScreen}
    />
    <Stack.Screen
      name="Home"
      options={{ headerShown: false }}
      component={Tabs}
    />
  </Stack.Navigator>;
};

export default MainStackNavigation;
