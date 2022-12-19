import { SafeAreaView,KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, } from 'firebase/auth'
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = () => {
     createUserWithEmailAndPassword(auth, username, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        setIsSignedIn(true);
         AsyncStorage.setItem("isSignedIn", JSON.stringify(true));
        navigation.navigate("HomeScreen");
      })
    .catch(error => alert(error.message))
  }
  const handleSignIn = () => {
     signInWithEmailAndPassword(auth, username, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        setIsSignedIn(true);
        AsyncStorage.setItem("isSignedIn", JSON.stringify(true));
        navigation.navigate("HomeScreen")

      })
    .catch(error => alert(error.message))
  }

  const handleSignOut = () => {
    signOut(auth, username, password)
      .then(res => { setIsSignedIn(false) })
      .catch(err => { console.log(err) })
    setIsSignedIn(false)
    AsyncStorage.setItem('isSignedIn',JSON.stringify(false))
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#D9D9D9]">
      <KeyboardAvoidingView behavior="padding">
        <View className="w-72">
          <TextInput
            placeholder="username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            className="bg-white px-12 py-4 rounded-xl mt-5"
          ></TextInput>
          <TextInput
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="bg-white px-12 py-4 rounded-xl mt-5"
            secureTextEntry
          ></TextInput>
        </View>
        <View className=" justify-center items-center space-y-4">
          <TouchableOpacity
            onPress={handleSignIn}
            className="w-24 mt-4 bg-orange-500 rounded-lg py-2 px-4"
          >
            <Text className="text-center text-white text-2xl font-semibold tracking-widest">
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            className="w-24 mt-4 bg-white border-4 border-orange-500 rounded-lg py-2 px-4"
          >
            <Text className="text-center text-orange-500 text-2xl font-semibold tracking-widest">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default AuthScreen