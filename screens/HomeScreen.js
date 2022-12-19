import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'

import { Avatar, Tab } from '@rneui/themed';

import { useNavigation } from "@react-navigation/native";


import Lottie from "lottie-react-native";
import { Icon } from "@rneui/themed";

const HomeScreen = () => {

  const ToolList = [
    {
      id: "1",
      toolTitle: "BMI",
      lottieSource: require("./../assets/arm_animation.json"),
    },
    {
      id: "2",
      toolTitle: "Macro",
      lottieSource: require("./../assets/macro.json"),
    },
    {
      id: "3",
      toolTitle: "Calorie",
      lottieSource: require("./../assets/calorie.json"),
    },
    {
      id: "4",
      toolTitle: "BMR",
      lottieSource: require("./../assets/bmr.json"),
    },
    {
      id: "5",
      toolTitle: "Calorie 2",
      lottieSource: require("./../assets/calorie.json"),
    },
    {
      id: "6",
      toolTitle: "Macro 2",
      lottieSource: require("./../assets/macro.json"),
    },
  ];
  const navigation = useNavigation();
  
  const handleAvatarClick = () => {
    navigation.navigate("UserProfileScreen");
  }

 const ToolListItem = ({ toolTitle, lottieSource }) => (
   <TouchableOpacity className="flex-column mr-4 w-20 h-28 bg-white shadow-lg rounded-lg items-center justify-center">
     <View className="w-20 h-10 flex justify-center">
       <Lottie source={lottieSource} autoPlay loop  />
     </View>
     <Text className="mt-3 text-lg text-orange-400 font-semibold tracking-wider">
       {toolTitle}
     </Text>
   </TouchableOpacity>
 );
  const renderItem = ({ item }) => (
    <ToolListItem toolTitle={item.toolTitle} lottieSource={item.lottieSource} />
  );

  return (
    
      <SafeAreaView className="flex-1 mx-4 bg-[#D9D9D9]">
        <View className="flex-row mt-4 justify-between items-center">
          <Text className="text-3xl font-bold tracking-wider text-orange-500 align-center">
            Hey Akil,
          </Text>
          <View className="mr-5 shadow-lg">
            <Avatar
              size={55}
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
              onClick={handleAvatarClick}
            />
          </View>
        </View>
        <View>
          <Text className="text-xl font-semibold tracking-wider text-gray-500">
            How are you doing today?
          </Text>
        </View>
        <View className="mt-3 flex-row items-center space-x-2">
          <View className="w-32 border-2 p-2 border-orange-500 rounded-lg items-center">
            <Text className="text-2xl font-bold tracking-wider text-orange-500">
              Your plan
            </Text>
          </View>
          <View>
            <Text className="font-bold text-2xl">
              Valid till{" "}
              <Text className="underline underline-offset-4 underline-orange-500">
                Dec 01 2022
              </Text>
            </Text>
          </View>
        </View>
        <View className="mx-auto mt-4 py-2 bg-white w-full h-48 flex-row rounded-lg shadow-lg justify-between">
          <View className="px-4 py-3 space-y-3">
            <Text className="text-4xl font-bold tracking-wider text-gray-600 pb-3">
              Your Goal
            </Text>
            <Text className="text-2xl font-semibold underline tracking-wider text-orange-500">
              Lose Weight
            </Text>
            <Text className="text-2xl font-semibold underline tracking-wider text-orange-500">
              Gain Muscle
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-lg text-orange-300">Change</Text>
              <Icon name="chevron-right" color="#FDBA74" />
            </TouchableOpacity>
          </View>
          <View className="w-44 h-42">
            <Lottie
              source={require("./../assets/workout.json")}
              autoPlay
              loop
            />
          </View>
        </View>
        <View className="mt-3">
          <Text className="text-4xl font-bold text-orange-500">Tools</Text>
        </View>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
           data={ToolList}
          renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
          className="mt-3 max-h-32"
        />
      
          <Text className="text-4xl font-bold text-orange-500">Your Activites</Text>
      
               
      </SafeAreaView>
    
  );
}

export default HomeScreen