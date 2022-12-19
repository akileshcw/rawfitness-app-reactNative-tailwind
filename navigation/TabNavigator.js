import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import DietScreen from '../screens/DietScreen';
import ShopScreen from '../screens/ShopScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Lottie from "lottie-react-native";


const Tab = createBottomTabNavigator();


const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveBackgroundColor: "gray",
    }}
  >
    <Tab.Screen
      name="HomeScreen2"
      component={HomeScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Lottie source={require("../assets/homeIcon.json")} autoPlay loop />
        ),
      }}
    />
    <Tab.Screen
      name="WorkoutScreen"
      component={WorkoutScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Lottie
            source={require("../assets/workoutIcon.json")}
            autoPlay
            loop
          />
        ),
      }}
    />
    <Tab.Screen
      name="DietScreen"
      component={DietScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Lottie source={require("../assets/dietIcon.json")} autoPlay loop />
        ),
      }}
    />
    <Tab.Screen
      name="ShopScreen"
      component={ShopScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Lottie source={require("../assets/shopIcon.json")} autoPlay loop />
        ),
      }}
    />
    <Tab.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Lottie source={require("../assets/settingsIcon.json")} autoPlay loop />
        ),
      }}
    />
  </Tab.Navigator>
);



export default TabNavigator