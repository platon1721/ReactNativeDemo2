import React from 'react';

import {Text, View} from 'react-native';
import {Tabs} from "expo-router";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";

const TabsLayout = () => {
    return (
       <Tabs screenOptions={{headerShown: false}}>
           <Tabs.Screen name="nature-meditate" options={{tabBarLabel: "Meditate",
           tabBarIcon: ({color}) => (
               <MaterialCommunityIcons name="flower-tulip" size={24} color={color}/>
           )}}/>
           <Tabs.Screen name="affirmations" options={{tabBarLabel: "Midagi muud",
           tabBarIcon: ({color}) => (
               <Entypo name="open-book" size={24} color={color}/>
               )
           }}/>
       </Tabs>
    );
};

export default TabsLayout;