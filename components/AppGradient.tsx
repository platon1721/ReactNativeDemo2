import React, {ReactNode} from 'react';
import {LinearGradient} from "expo-linear-gradient";
import Content from "@/components/Content";
import {ColorValue} from "react-native";


interface AppGradientProps{
    children: ReactNode,
    colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}
const AppGradient: React.FC<AppGradientProps> = ({
                         children,
                         colors
                     }) => {
    return (
        <LinearGradient colors={colors}
                        className="flex-1">
            <Content>{children}</Content>
        </LinearGradient>
    );
};

export default AppGradient;