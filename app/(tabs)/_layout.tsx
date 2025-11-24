import React from 'react';

import {Text, View} from 'react-native';
import {Tabs} from "expo-router";

const TabsLayout = () => {
    return (
       <Tabs screenOptions={{headerShown: false}}>
           <Tabs.Screen name="nature-meditate" options={{tabBarLabel: "Meditate"}}/>
           <Tabs.Screen name="affirmations" options={{tabBarLabel: "Midagi muud"}}/>
       </Tabs>
    );
};

export default TabsLayout;