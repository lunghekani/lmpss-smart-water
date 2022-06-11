import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from  "../screens/Home/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupScreen, LoginScreen, Login, HomeScreen } from "../screens";
import SplashScreen from "../screens/LoginHome/SplashScreen";
import ForgotPassword from "../screens/LoginHome/ForgotPassword";
import { Tabs } from "./TabsNavigator";


const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign-up" component={SignupScreen} />
      <Stack.Screen name="Forgot-Password" component={ForgotPassword} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
  // <Stack.Navigator>
  //   <Stack.Screen
  //     name="LoginScreen"
  //     options={{ headerShown: false }}
  //     component={LoginScreen}
  //   />
  //   <Stack.Screen
  //     name="Login"
  //     options={{ headerShown: false }}
  //     component={Login}
  //   />
  //   <Stack.Screen
  //     name="Signup"
  //     options={{ headerShown: false }}
  //     component={SignupScreen}
  //   />
  //   <Stack.Screen
  //     name="Home"
  //     options={{ headerShown: false }}
  //     component={Tabs}
  //   />
  // </Stack.Navigator>;
};

export default MainStackNavigation;
