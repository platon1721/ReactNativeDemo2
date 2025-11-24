import React from 'react';

import {FlatList, Text, View, Image} from 'react-native';
import {GalleryPreviewData} from "@/models/AffirmationCategory";


interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}
const GuidedAffirmationsGallery = ({
                                                                title,
                                                                products,}: GuidedAffirmationsGalleryProps) => {
    return (
        <View className="my-5">
            <View className="mb-2">
                <Text className="text-white text-xl font-bold">{title}</Text>
            </View>
            <View>
                <FlatList horizontal
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={(item) => item.id.toString()}
                          data={products}
                          renderItem={({item}) => (
                    <View className="h-36 w-32 rounded-md mr-4">
                        <Image source={item.image} resizeMode="cover" className="w-full h-full"/>
                    </View>
                )}/>
            </View>
        </View>
    );
};

export default GuidedAffirmationsGallery;