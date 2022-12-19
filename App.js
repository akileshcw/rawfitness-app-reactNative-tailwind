import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen, AuthScreen } from "./screens";
import TabNavigator from "./navigation/TabNavigator";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const retreiveLogin = async () => {
    try {
      const data = await AsyncStorage.getItem("isSignedIn");
      setIsSignedIn(data);
    } catch (err) {
      console.log("the error message is : " + err);
    }
    
  };
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null)

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then((value) => {
  //     if (value === null) {
  //       AsyncStorage.setItem('alreadyLaunched', true);
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   })
  // }, [])

  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch === true) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <HomeScreen />
        ) : (
          <>
            <Stack.Screen
              name="OnboardingScreen"
              options={{ headerShown: false }}
              component={OnboardingScreen}
            />
            <Stack.Screen
                name="AuthScreen"
                options={{ headerShown: false }}
                component={AuthScreen}
              />
            <Stack.Screen
              name="HomeScreen"
              options={{ headerShown: false }}
              component={TabNavigator}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // } else {
  //   return <AuthScreen />
  // }
}
