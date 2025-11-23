import React from 'react';

import {ImageBackground, Text, View} from 'react-native';

import beachImage from '@/assets/meditation-images/beach.jpg';
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";
import AppGradient from "@/components/AppGradient";

const Index = () => {

    const router = useRouter();

    return (
        <View className="flex-1">
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient
                    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <View className="flex-1 justify-between">
                        <View>
                            <Text className="text-center text-white font-bold text-4xl ">
                                Simple Meditation
                            </Text>
                            <Text className="text-center text-white font-regular text-2xl mt-3">
                                For Everyone
                            </Text>
                        </View>
                        <View>
                            <CustomButton onPress={() => router.push("/nature-meditate")} title={"Get Started"}></CustomButton>
                        </View>
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default Index;