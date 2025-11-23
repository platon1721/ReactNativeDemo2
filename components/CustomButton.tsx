import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

interface CustomButtonProps{
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}
const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
                      }: CustomButtonProps) => {
    return (
        <TouchableOpacity
        activeOpacity={0.7}
        className={`bg-white rounded-xl justify-center  min-h-[45px] items-center ${containerStyles}`}
        onPress={onPress}
        >
            <Text
                className={`text-primary font-semibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;