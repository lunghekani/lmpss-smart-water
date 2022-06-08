import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ChartScreen } from "../screens";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({children, onPress}) => {
//     <TouchableOpacity
//     onPress={onPress}
//     style={{
//         top: -30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         ...styles.shadow
//     }}
//     >
//         <View
//         style={{
//             width: 70,
//             height: 70,
//             borderRadius: 35,
//             backgroundColor: '#fff',
//         }}
//         >
//             {children}
//         </View>
//     </TouchableOpacity>
// }

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#219ebc",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "#219ebc" : "#000"}
              name="home-outline"
              size={25}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Charts"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "#219ebc" : "#000"}
              name="stats-chart-outline"
              size={25}
            />
          ),
        }}
        component={ChartScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {},
});
