import React from 'react';

import {FlatList, ImageBackground, Pressable, StatusBar, Text, View} from 'react-native';
import AppGradient from '@/components/AppGradient'

import {MEDITATION_DATA} from '@/constants/MeditationData';

import MEDITATION_IMAGES from "@/constants/meditation-images"




const NatureMeditate = () => {


    return (
        <View className="flex-1">
            <AppGradient colors={['#161b2e', '#0a4d4a']}>
                <View className="mb-6">
                    <Text className="text-gray-50 mb-3 font-bold text-3xl text-left">
                        Welcome
                    </Text>
                    <Text className="text-indigo-100 text-xl font-medium">
                        This is the Nature Meditate page
                    </Text>
                </View>
                <View className="flex-1">
                    <FlatList
                        data={MEDITATION_DATA}
                        className={"mb-8"}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => {
                            console.log('Rendering item:', item);
                            return (
                                <Pressable
                                    className="h-48 my-3 rounded-md overflow-hidden"
                                    onPress={() => console.log("press", item.title)}>
                                    <ImageBackground
                                        source={MEDITATION_IMAGES[item.id - 1]}
                                        className="flex-1 rounded-md justify-center">
                                        <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
                                            <View className="flex-1 justify-center">
                                                <Text className="text-gray-50 text-3xl font-bold text-center">
                                                    {item.title}
                                                </Text>
                                            </View>
                                        </AppGradient>
                                        {/*<LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']}*/}
                                        {/*                className="justify-center items-center" style={{flex : 1, justifyContent : "center", alignItems : "center"}}>*/}
                                        {/*    <Text className="text-gray-50 text-3xl font-bold text-center">*/}
                                        {/*        {item.title}*/}
                                        {/*    </Text>*/}
                                        {/*</LinearGradient>*/}
                                    </ImageBackground>
                                </Pressable>
                            );
                        }}
                    />
                </View>
            </AppGradient>
        </View>
    );
};

export default NatureMeditate;