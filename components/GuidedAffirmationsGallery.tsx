import React from 'react';

import {FlatList, Text, View, Image, Pressable} from 'react-native';
import {GalleryPreviewData} from "@/models/AffirmationCategory";
import {Href, Link} from "expo-router";


interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
                                       title,
                                       products,
                                   }: GuidedAffirmationsGalleryProps) => {
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
                              <Link href={`/app/(tabs)/affiramtions/affirmations.tsx/${item.id}` as Href} asChild>
                                  <Pressable>
                                      <View className="h-36 w-32 rounded-md mr-4">
                                          <Image source={item.image} resizeMode="cover" className="w-full h-full"/>
                                      </View>
                                  </Pressable>
                              </Link>
                          )}/>
            </View>
        </View>
    );
};

export default GuidedAffirmationsGallery;