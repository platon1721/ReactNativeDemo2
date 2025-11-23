import React, {ReactNode} from 'react';

import {Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

interface ContentProps{
    children: ReactNode;
}
const Content: React.FC<ContentProps> = ({children}) => {
    return (
        <SafeAreaView className="flex-1 px-5 py-5">
            {children}
        </SafeAreaView>
    );
};

export default Content;