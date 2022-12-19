import { Text, SafeAreaView, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import Lottie from "lottie-react-native";

import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const WorkoutScreen = () => {
  const data = [
    {
      date: "Dec-10",
      calorie: 440,
    },{
      date: "Dec-11",
      calorie: 100,
    },{
      date: "Dec-12",
      calorie: 150,
    },{
      date: "Dec-13",
      calorie: 500,
    },{
      date: "Dec-14",
      calorie: 50,
    },{
      date: "Dec-15",
      calorie: 220,
    },{
      date: "Dec-16",
      calorie: 300,
    },{
      date: "Dec-17",
      calorie: 10,
    },{
      date: "Dec-18",
      calorie: 440,
    },{
      date: "Dec-19",
      calorie: 100,
    },{
      date: "Dec-20",
      calorie: 150,
    },{
      date: "Dec-21",
      calorie: 500,
    },{
      date: "Dec-22",
      calorie: 50,
    },{
      date: "Dec-23",
      calorie: 220,
    },{
      date: "Dec-24",
      calorie: 300,
    },{
      date: "Dec-25",
      calorie: 10,
    },
    
  ];

  const ActivityList = [
    {
      id: "1",
      activityTitle: "Drink Water",
      lottieSource: require("./../assets/drinkWater.json"),
    },
    {
      id: "2",
      activityTitle: "Game Played",
      lottieSource: require("./../assets/gamePlayed.json"),
    },
    {
      id: "3",
      activityTitle: "Cycle",
      lottieSource: require("./../assets/cycle.json"),
    },
    {
      id: "4",
      activityTitle: "Sleep",
      lottieSource: require("./../assets/sleep.json"),
    },
    {
      id: "5",
      activityTitle: "Mindful",
      lottieSource: require("./../assets/mindful.json"),
    },
      ];
  const ToolListItem = ({ activityTitle, lottieSource }) => (
    <TouchableOpacity className="flex-column mr-4 w-20 h-28 bg-white shadow-lg rounded-lg items-center justify-center">
      <View className="w-20 h-10 flex justify-center">
        <Lottie source={lottieSource} autoPlay loop />
      </View>
      <Text className="mt-3 text-lg text-orange-400 font-semibold tracking-wider">
        {activityTitle}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <ToolListItem
      activityTitle={item.activityTitle}
      lottieSource={item.lottieSource}
    />
  );
  return (
    <SafeAreaView className="mx-3">
      <View className="mt-3 space-y-3">
        <Text className="font-bold text-4xl text-orange-500">
          Your Workouts Today
        </Text>
        {/* ------------------FIRST CARD SECTION-------------- */}
        <View className="w-full h-36 shadow-lg bg-white rounded-lg flex-row">
          <View className="px-4 py-2">
            <Text className="text-3xl text-slate-500 font-semibold">
              Cardio Goal
            </Text>
            <Lottie
              source={require("../assets/running.json")}
              autoPlay
              loop
              style={{ width: "70%", height: "90%%" }}
            />
          </View>
          <View className="w-1/2 items-center justify-center">
            <VictoryBar
              data={data}
              x={"date"}
              y={"calorie"}
              width={250}
              height={200}
              style={{
                data: { fill: "orange", opacity: 0.7, borderRadius: 5 },
                labels: { fontSize: 12 },
                parent: { border: "1px solid #ccc" },
              }}
              
            />
          </View>
        </View>
        {/* ------------------SECTION-------------- */}
        <View>
          <Text className="font-bold text-4xl text-orange-500">
            Other Activities
          </Text>
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            data={ActivityList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            className="mt-3 max-h-40"
          />
        </View>
        {/* ------------------THIRD CARD SECTION-------------- */}
        <View>
          <Text className="font-bold text-4xl text-orange-500">Strenght Training</Text>
          <View>
            <Text className='font-semibold text-3xl text-orange-400 underline'>Chest</Text>
          </View>
        </View>
        {/* ------------------THIRD CARD SECTION-------------- */}
      </View>
    </SafeAreaView>
  );
};

export default WorkoutScreen;
