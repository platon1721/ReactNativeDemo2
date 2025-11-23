import React from 'react';

import {FlatList, ImageBackground, Pressable, Text, View} from 'react-native';
import AppGradient from '@/components/AppGradient'

import {MEDITATION_DATA} from '@/constants/MeditationData';
import MEDITATION_IMAGES from "@/constants/meditation-images"
const NatureMeditate = () => {
    return (
        <View className="flex-1">
                <AppGradient colors={['#161b2e', '#0a4d4a']} >
                    <View>
                        <Text className="text-gray-50 mb-3 font-bold text-3xl text-left">
                            Welcome
                        </Text>
                        <Text className="text-indigo-100 text-xl font-medium">
                            This is the Nature Meditate page
                        </Text>
                    </View>
                    <View>
                        <FlatList data={MEDITATION_DATA}
                                  keyExtractor={(item) => item.id.toString()}
                                  renderItem={({item}) => (
                            <Pressable
                                className="h-48 my-3 rounded-md overflow-hidden"
                                onPress={() => console.log("press")}>
                                <ImageBackground
                                    source={MEDITATION_IMAGES[item.id = 1]}
                                    className="flex-1 rounded-md justify-center">
                                    <Text className="text-gray-50 text-3xl font-bold text-center">
                                        {item.title}
                                    </Text>
                                </ImageBackground>
                            </Pressable>
                        )}></FlatList>
                    </View>

                </AppGradient>
        </View>
    );
};

export default NatureMeditate;