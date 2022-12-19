import { View,Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

import Onboarding from "react-native-onboarding-swiper";

import Lottie from "lottie-react-native";

const OnboardingScreen = () => {
  const navigation = useNavigation()

  const DotComponent = (selected) => {
    return (
      <View className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${selected ? 'border border-gray-600' : ''}`}>
        <View className={`w-2 h-2 ${selected ? 'bg-orange-700' : 'bg-gray-300'} rounded-full`}>
        </View>
      </View>
    )
  }
  return (
    <Onboarding
      onSkip={() => navigation.replace("AuthScreen")}
      onDone={() => navigation.replace("AuthScreen")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#D9D9D9",
          image: (
            <Lottie
              source={require("../assets/Onboarding1.json")}
              autoPlay
              loop
              style={{ width: "100%", height: 350 }}
            />
          ),
          title: "Welcome to Raw Fitness",
          subtitle:
            "Find all your fitness goal in one place. Right Here! Right Now!",
          titleStyles: { color: "#F3300C", fontSize: 35, fontWeight: "bold" },
        },
        {
          backgroundColor: "#D9D9D9",
          image: (
            <Lottie
              source={require("../assets/Onboarding1.json")}
              autoPlay
              loop
              style={{ width: "100%", height: 350 }}
            />
          ),
          title: "View Workouts",
          subtitle:
            "Browse through all the available workouts, add classes and book personal training",
        },
        {
          backgroundColor: "#D9D9D9",
          image: (
            <Lottie
              source={require("../assets/Onboarding3.json")}
              autoPlay
              loop
              style={{ width: "100%", height: 300 }}
            />
          ),
          title: "Plan Nutrition",
          subtitle:
            "Perfectly plan your nutrition to your set goal, calculate your macros and start tracking your food",
        },
      ]}
    />
  );
}

export default OnboardingScreen